import React from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

const BookingConfirmation = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const typeFromQuery = searchParams.get("type");
  const typeFromState = location.state?.bookingType;
  const bookingType = typeFromQuery || typeFromState || "exact";

  const isExact = bookingType === "exact";

  return (
    <div className="page booking-confirmation-page page-fade-in">
      <SEO path="/booking-confirmation/" />
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        
        {/* Success Header Card */}
        <div className="confirmation-header-card">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={56} className="success-icon" />
          </div>
          <span className="confirmation-badge">Appointment Scheduled</span>
          <h1 className="confirmation-title">Thank You for Booking Your Emissions Test!</h1>
          <p className="confirmation-subtitle">
            You'll receive a confirmation email shortly. Don't hesitate to reach out with any questions — call or text us at{" "}
            <a href="tel:3853926701" style={{ color: "var(--primary)", fontWeight: 700 }}>(385) 392-6701</a>!
          </p>
        </div>

        {/* Booking Summary */}
        <div className="confirmation-details-card" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", color: "var(--text-main)", lineHeight: 1.7, margin: 0 }}>
            You booked a <strong>{isExact ? "exact time" : "flexible 2-hour window"}</strong> mobile
            emissions inspection. {isExact ? "We'll arrive at your scheduled time." : "We'll arrive within your selected window."}
          </p>
        </div>

        {/* What's Next Steps Card */}
        <div className="confirmation-steps-card">
          <h2 className="card-section-title">What Happens Next?</h2>
          
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Check Your Email</h3>
                <p>A confirmation with your appointment details is on its way. You'll also get a reminder before your appointment.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>We Come to You</h3>
                <p>Our technician will arrive at your location — no need to drive anywhere or wait in line.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Quick & Easy Testing</h3>
                <p>The inspection takes about 10–15 minutes, and you'll get your official documentation right on the spot.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Contact Banner */}
        <div className="confirmation-support-box">
          <div>
            <h3>Questions or need to reschedule?</h3>
            <p>We're here to help — call or text us anytime!</p>
          </div>
          <a href="tel:3853926701" className="btn btn-outline-white">
            <Phone size={18} /> (385) 392-6701
          </a>
        </div>

        {/* Action Buttons */}
        <div className="confirmation-actions">
          <Link to="/" className="btn btn-primary">
            Return to Homepage <ArrowRight size={18} />
          </Link>
          <Link to="/book-now/" className="btn btn-outline">
            Book Another Vehicle
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BookingConfirmation;
