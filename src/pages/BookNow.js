import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const bookingType = searchParams.get("type") || "exact";

  // Configure your Cal.com event types here
  const calComEvents = {
    exact: "jacob-hair-mjvgfx/30min", // $70 - Exact time
    flexible: "jacob-hair-mjvgfx/2-hour-window", // $60 - Flexible window (create this in Cal.com)
  };

  const calComLink = calComEvents[bookingType] || calComEvents.exact;
  const isExact = bookingType === "exact";

  return (
    <div className="page book-now-page">
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
            to="/book-now?type=exact"
            className={`btn ${isExact ? "btn-primary" : "btn-outline"}`}
          >
            Exact Time ($70)
          </Link>
          <Link
            to="/book-now?type=flexible"
            className={`btn ${!isExact ? "btn-primary" : "btn-outline"}`}
          >
            Flexible Window ($60)
          </Link>
        </div>

        <p className="subtitle" style={{ marginBottom: "1rem" }}>
          {isExact
            ? "Choose your exact appointment time."
            : "Select a 2-hour window and we'll arrive within that time."}
        </p>

        {calComLink ? (
          /* Cal.com Embed - Full Screen */
          <div
            className="calendar-container"
            style={{
              width: "100%",
              height: "calc(100vh - 200px)",
              minHeight: "500px",
            }}
          >
            <iframe
              src={`https://cal.com/${calComLink}`}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Book an Appointment"
            ></iframe>
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
            <h3 style={{ marginBottom: "1rem", color: "#334155" }}>
              📅 Online Booking Coming Soon!
            </h3>
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
              <a href="tel:5551234567" className="btn btn-primary">
                📞 Call (555) 123-4567
              </a>
              <a href="sms:5551234567" className="btn btn-outline">
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
