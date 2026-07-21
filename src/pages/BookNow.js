import React, { useEffect, useCallback } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const bookingType = searchParams.get("type") || "exact";

  // Configure your Cal.com event types here
  const calComEvents = {
    exact: "monson-anderson-bu4hen/exact-time", // $70 - Exact time
    flexible: "monson-anderson-bu4hen/2-hour-window", // $60 - Flexible window
  };

  const calComLink = calComEvents[bookingType] || calComEvents.exact;
  const isExact = bookingType === "exact";

  const goToConfirmation = useCallback(
    (details) => {
      navigate(`/booking-confirmation/?type=${bookingType}`, {
        state: { bookingType, details },
      });
    },
    [navigate, bookingType]
  );

  // Fallback: listen for raw postMessage events from the Cal.com iframe
  useEffect(() => {
    const handleMessage = (event) => {
      try {
        if (!event || !event.data) return;

        let rawData = event.data;
        let str = "";

        if (typeof rawData === "string") {
          str = rawData.toLowerCase();
          try {
            rawData = JSON.parse(rawData);
          } catch (e) {
            // string wasn't valid JSON
          }
        } else if (typeof rawData === "object" && rawData !== null) {
          try {
            str = JSON.stringify(rawData).toLowerCase();
          } catch (e) {
            str = "";
          }
        }

        // Check if message indicates booking completion
        const isSuccess =
          str.includes("bookingsuccessful") ||
          str.includes("cal:bookingsuccessful") ||
          (str.includes("booking") && (str.includes("success") || str.includes("scheduled") || str.includes("confirmed")));

        if (isSuccess) {
          goToConfirmation(typeof rawData === "object" ? rawData : null);
        }
      } catch (err) {
        // Silently handle cross-origin message parsing
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [goToConfirmation]);

  // Primary: Load Cal.com embed SDK for reliable bookingSuccessful events
  // Note: This may cause harmless "Script error." overlays in dev mode only.
  // In production builds these are silently ignored.
  useEffect(() => {
    // Skip SDK in development to avoid noisy error overlay
    if (process.env.NODE_ENV === "development") return;

    const loadCalEmbed = () => {
      if (window.Cal) return; // already loaded

      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            let api = function () { p(api, arguments); };
            let namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      window.Cal("init", { origin: "https://cal.com" });
      window.Cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          goToConfirmation(e?.detail);
        },
      });
    };

    loadCalEmbed();
  }, [goToConfirmation]);

  return (
    <div className="page book-now-page">
      <SEO path="/book-now/" />
      <div className="container">
        <h1>Book Your Inspection</h1>

        {/* Booking Type Tabs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
            justifyContent: "center",
          }}
        >
          <Link
            to="/book-now/?type=exact"
            className={`btn ${isExact ? "btn-primary" : "btn-outline"}`}
          >
            Exact Time ($70)
          </Link>
          <Link
            to="/book-now/?type=flexible"
            className={`btn ${!isExact ? "btn-primary" : "btn-outline"}`}
          >
            Flexible Window ($60)
          </Link>
        </div>

        <p className="subtitle" style={{ marginBottom: "1rem" }}>
          {isExact ? (
            <>
              Choose your <strong>exact</strong> appointment time.
            </>
          ) : (
            "Select a 2-hour window and we'll arrive within that time."
          )}
        </p>

        {calComLink ? (
          <div style={{ width: "100%" }}>
            {/* Cal.com Embed Container */}
            <div
              className="calendar-container"
              style={{
                width: "100%",
                height: "calc(100vh - 220px)",
                minHeight: "520px",
              }}
            >
              <iframe
                src={`https://cal.com/${calComLink}?embed=true`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                title="Book an Appointment"
              ></iframe>
            </div>
          </div>
        ) : (
          /* Placeholder until Cal.com is set up */
          <div
            className="booking-setup-notice"
            style={{
              padding: "3rem 2rem",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              textAlign: "center",
              border: "2px dashed #cbd5e1",
              marginTop: "1rem",
            }}
          >
            <h2 style={{ marginBottom: "1rem", color: "#334155" }}>
              📅 Online Booking Coming Soon!
            </h2>
            <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
              We're setting up our online scheduling system.
              <br />
              In the meantime, please contact us directly to book your
              appointment.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="tel:3853926701" className="btn btn-primary">
                📞 Call (385) 392-6701
              </a>
              <a href="sms:3853926701" className="btn btn-outline">
                💬 Text Us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookNow;
