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
          <div className="pricing-card">
            <h3>Standard Inspection</h3>
            <div className="price">$40</div>
            <p className="price-desc">per vehicle</p>
            <ul className="features-list">
              <li>
                <Check size={16} /> On-site inspection
              </li>
              <li>
                <Check size={16} /> Instant results
              </li>
              <li>
                <Check size={16} /> Digital certificate
              </li>
              <li>
                <Check size={16} /> DMV renewal support
              </li>
            </ul>
            <Link to="/book-now" className="btn btn-primary full-width">
              Book Standard
            </Link>
          </div>

          <div className="pricing-card featured">
            <div className="tag">Best Value</div>
            <h3>Fleet / Multi-Car</h3>
            <div className="price">$35</div>
            <p className="price-desc">per vehicle (3+ cars)</p>
            <ul className="features-list">
              <li>
                <Check size={16} /> Disounted rate
              </li>
              <li>
                <Check size={16} /> Priority scheduling
              </li>
              <li>
                <Check size={16} /> Monthly billing available
              </li>
              <li>
                <Check size={16} /> Dedicated account manager
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary full-width">
              Contact for Fleet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
