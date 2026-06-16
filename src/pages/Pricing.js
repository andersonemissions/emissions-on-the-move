import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="page pricing-page page-fade-in">
      <title>Emissions Testing Prices from $60 | Emissions on the Move</title>
      <meta
        name="description"
        content="Affordable mobile emissions testing in Utah County. Flexible 2-hour window for $60, exact appointment time for $70, additional vehicles $40 each. No hidden fees."
      />
      <link rel="canonical" href="https://www.emissionsonthemove.com/pricing" />
      <div className="container">
        <h1>Our Pricing</h1>
        <p className="subtitle">
          Simple, transparent pricing with no hidden fees.
        </p>

        <div className="pricing-cards">
          {/* Exact Time Option */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Exact Time</h3>
              <div className="price-container">
                <span className="price-num">$70</span>
                <span className="price-period">/ vehicle</span>
              </div>
            </div>
            <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Perfect for busy days. Book a precise time slot, and we'll arrive on the dot.
            </p>
            <ul className="pricing-list">
              <li>
                <Check size={18} className="check-icon" /> Choose your exact appointment time
              </li>
              <li>
                <Check size={18} className="check-icon" /> Full mobile emission test
              </li>
              <li>
                <Check size={18} className="check-icon" /> Instant digital test reports
              </li>
            </ul>
            <Link
              to="/book-now?type=exact"
              className="btn btn-outline"
              style={{ width: "100%" }}
            >
              Book Exact Time
            </Link>
          </div>

          {/* Flexible Window Option */}
          <div className="pricing-card featured">
            <div className="pricing-card-badge">Best Value</div>
            <div className="pricing-header">
              <h3>Flexible Window</h3>
              <div className="price-container">
                <span className="price-num">$60</span>
                <span className="price-period">/ vehicle</span>
              </div>
            </div>
            <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Save money by choosing a flexible 2-hour arrival window that fits your day.
            </p>
            <ul class="pricing-list">
              <li>
                <Check size={18} className="check-icon" /> 2-hour technician arrival window
              </li>
              <li>
                <Check size={18} className="check-icon" /> Full mobile emission test
              </li>
              <li>
                <Check size={18} className="check-icon" /> Instant digital test reports
              </li>
            </ul>
            <Link
              to="/book-now?type=flexible"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Book Flexible Window
            </Link>
          </div>
        </div>

        <div className="pricing-note">
          <span>
            <strong>Multiple cars?</strong> Add additional vehicles at <strong>$40 each</strong>!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
