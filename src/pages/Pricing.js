import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="page pricing-page">
      <div className="container">
        <h1>Our Pricing</h1>
        <p className="subtitle">
          Simple, transparent pricing with no hidden fees.
        </p>

        <div className="pricing-cards">
          {/* Exact Time Option */}
          <div className="pricing-card">
            <h3>Exact Time</h3>
            <div className="price">$70</div>
            <p className="price-desc">per vehicle</p>
            <ul className="features-list">
              <li>
                <Check size={16} /> Choose your exact appointment time
              </li>
              <li>
                <Check size={16} /> On-site mobile inspection
              </li>
              <li>
                <Check size={16} /> Instant results
              </li>
              <li>
                <Check size={16} /> Digital certificate
              </li>
            </ul>
            <Link
              to="/book-now?type=exact"
              className="btn btn-primary full-width"
            >
              Book Exact Time
            </Link>
          </div>

          {/* Flexible Window Option */}
          <div className="pricing-card featured">
            <div className="tag">Best Value</div>
            <h3>Flexible Window</h3>
            <div className="price">$60</div>
            <p className="price-desc">per vehicle</p>
            <ul className="features-list">
              <li>
                <Check size={16} /> 2-hour arrival window
              </li>
              <li>
                <Check size={16} /> On-site mobile inspection
              </li>
              <li>
                <Check size={16} /> Instant results
              </li>
              <li>
                <Check size={16} /> Digital certificate
              </li>
            </ul>
            <Link
              to="/book-now?type=flexible"
              className="btn btn-primary full-width"
            >
              Book Flexible Window
            </Link>
          </div>
        </div>

        {/* Additional Cars Note */}
        <div
          className="pricing-note"
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            backgroundColor: "#f0fff4",
            borderRadius: "12px",
            textAlign: "center",
            border: "1px solid #c6f6d5",
          }}
        >
          <p style={{ margin: 0, fontSize: "1.1rem", color: "#276749" }}>
            <strong>🚗 Multiple vehicles?</strong> Add additional vehicles at
            $40 each!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
