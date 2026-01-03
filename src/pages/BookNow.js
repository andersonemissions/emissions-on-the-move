import React from "react";

const BookNow = () => {
  // TODO: Replace this with your actual Cal.com username/event-type
  // Example: "your-username/emissions-inspection"
  const calComLink = null; // Set to something like "monson-emissions/standard-inspection"

  return (
    <div className="page book-now-page">
      <div className="container">
        <h1>Book Your Inspection</h1>
        <p className="subtitle">Choose a time that works for you.</p>

        {calComLink ? (
          /* Cal.com Embed */
          <div
            className="calendar-container"
            style={{ width: "100%", minHeight: "600px" }}
          >
            <iframe
              src={`https://cal.com/${calComLink}`}
              style={{
                width: "100%",
                height: "600px",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
