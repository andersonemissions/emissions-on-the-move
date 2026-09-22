import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { PRICES, usd } from "../data/pricing";
import otsLogo from "../assets/on-the-spot-renewal-logo.png";

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

        {/* On-The-Spot Renewal & Additional Services Callout */}
        <div className="pricing-ots-card">
          <div className="pricing-ots-badge-wrapper">
            <Link to="/services/#on-the-spot" title="Utah DMV Authorized On-The-Spot Renewal Station">
              <img
                src={otsLogo}
                alt="Utah On The Spot Renewal Authorized Station"
                className="pricing-ots-decal"
                width="240"
                height="72"
              />
            </Link>
          </div>
          <div className="pricing-ots-content">
            <div className="pricing-ots-title-row">
              <span className="service-pill service-pill-highlight">Utah DMV Authorized</span>
              <h3>On-The-Spot Registration Renewal & VIN Inspections</h3>
            </div>
            <p>
              Need updated registration stickers or an out-of-state VIN inspection? As an authorized On-The-Spot station,
              we renew your registration and hand you official license plate decals and registration card right during your visit.
            </p>
            <div className="pricing-ots-actions">
              <Link to="/services/#on-the-spot" className="btn btn-outline btn-sm">
                How On-The-Spot Renewal Works <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
