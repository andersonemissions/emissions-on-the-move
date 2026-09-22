import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "../components/SEO";
import { PRICES, usd } from "../data/pricing";

const Pricing = () => {
  return (
    <div className="page pricing-page page-fade-in">
      <SEO path="/pricing/" />
      <div className="container">
        <h1>Pricing</h1>
        <p className="subtitle">
          Simple, transparent pricing with no hidden fees.
        </p>

        <div className="pricing-cards">
          {/* Exact Time Option */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h2>Exact Time</h2>
              <div className="price-container">
                <span className="price-num">{usd(PRICES.exact)}</span>
                <span className="price-period">/ vehicle</span>
              </div>
            </div>
            <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              We arrive at the exact time you pick.
            </p>
            <ul className="pricing-list">
              <li>
                <Check size={18} className="check-icon" /> Best for tight schedules
              </li>
              <li>
                <Check size={18} className="check-icon" /> Full mobile emissions test
              </li>
              <li>
                <Check size={18} className="check-icon" /> Instant electronic DMV upload
              </li>
            </ul>
            <Link
              to="/book-now/?type=exact"
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
              <h2>Flexible Window</h2>
              <div className="price-container">
                <span className="price-num">{usd(PRICES.flexible)}</span>
                <span className="price-period">/ vehicle</span>
              </div>
            </div>
            <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Save money by choosing a flexible 2-hour arrival window that fits your day.
            </p>
            <ul className="pricing-list">
              <li>
                <Check size={18} className="check-icon" /> 2-hour technician arrival window
              </li>
              <li>
                <Check size={18} className="check-icon" /> Full mobile emissions test
              </li>
              <li>
                <Check size={18} className="check-icon" /> Instant electronic DMV upload
              </li>
            </ul>
            <Link
              to="/book-now/?type=flexible"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Book Flexible Window
            </Link>
          </div>
        </div>

        <div className="pricing-note">
          <span>
            <strong>Multiple cars?</strong> Add additional vehicles at{" "}
            <strong>{usd(PRICES.additionalVehicle)} each</strong>!
          </span>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            color: "var(--text-light)",
            fontSize: "0.95rem",
          }}
        >
          ✨ <strong>DMV Registration Renewals:</strong> As an authorized On-The-Spot station, we process your renewal and issue official license plate decals during your visit. <strong>VIN Inspections:</strong> We also complete Form TC-661 on-site for out-of-state titles.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
