import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  FileText,
  Truck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import SEO from "../components/SEO";
import otsLogo from "../assets/on-the-spot-renewal-logo.png";

const Home = () => {
  return (
    <div className="page home-page page-fade-in">
      <SEO path="/" />

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <h1>
              Mobile Emissions & DMV Renewals, <br />
              <span className="text-green">Delivered to Your Driveway.</span>
            </h1>
            <p className="hero-subtitle">
              We come to you anywhere in Utah County. Get tested and renewed in 10–15 minutes.
            </p>
            <div className="hero-buttons">
              <Link to="/book-now/" className="btn btn-primary">
                Book Now <ArrowRight size={18} />
              </Link>
              <Link to="/pricing/" className="btn btn-outline-white">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Pillar Trust Bar */}
      <section className="trust-bar">
        <div className="container trust-grid-3">
          <div className="trust-grid-item">
            <Clock className="trust-icon" size={22} />
            <div className="trust-item-text">
              <strong>10–15 minute</strong> visit
            </div>
          </div>
          <div className="trust-grid-item">
            <ShieldCheck className="trust-icon" size={22} />
            <div className="trust-item-text">
              <strong>State-certified</strong> technicians
            </div>
          </div>
          <div className="trust-grid-item">
            <CheckCircle2 className="trust-icon" size={22} />
            <div className="trust-item-text">
              <strong>Free 15-day</strong> retest
            </div>
          </div>
        </div>
      </section>

      {/* On-The-Spot DMV Accreditation Banner */}
      <section className="ots-banner-section">
        <div className="container">
          <div className="ots-banner-card">
            <div className="ots-banner-logo-wrap">
              <img
                src={otsLogo}
                alt="Utah DMV Authorized Station On The SPOT Renewal"
                className="ots-banner-logo"
                width="220"
                height="64"
                fetchPriority="high"
              />
            </div>
            <div className="ots-banner-content">
              <div className="ots-banner-badge">Official State Program</div>
              <h3>Utah DMV Authorized On-The-Spot Station</h3>
              <p>
                We print your official registration stickers at your car. No DMV trip.
              </p>
            </div>
            <div className="ots-banner-action">
              <Link to="/services/#on-the-spot" className="btn btn-outline">
                How It Works <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section container">
        <div className="section-header">
          <h2>What We Do</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <ShieldCheck size={32} />
            </div>
            <h3>Emissions Testing</h3>
            <p>State-certified testing at your home or work.</p>
            <Link to="/services/#emissions-testing" className="service-card-link">
              Details <ArrowRight size={14} />
            </Link>
          </div>

          <div className="service-card service-card-highlight">
            <div className="service-floating-badge">★ DMV Authorized</div>
            <div className="service-icon-wrapper">
              <Award size={32} />
            </div>
            <h3>On-The-Spot Renewal</h3>
            <p>Renew during your test and get your stickers on the spot.</p>
            <Link to="/services/#on-the-spot" className="service-card-link">
              Details <ArrowRight size={14} />
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <FileText size={32} />
            </div>
            <h3>VIN Inspections</h3>
            <p>Form TC-661 for out-of-state vehicles, completed at your door.</p>
            <Link to="/services/#vin-inspections" className="service-card-link">
              Details <ArrowRight size={14} />
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <Truck size={32} />
            </div>
            <h3>Fleet Testing</h3>
            <p>Scheduled testing at your yard or office, with volume discounts.</p>
            <Link to="/services/#fleet-testing" className="service-card-link">
              Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>

          <div className="home-steps-grid">
            <div className="home-step-card">
              <div className="home-step-number">1</div>
              <h3>Book online</h3>
              <p>
                Pick an exact time or a cheaper 2-hour window.
              </p>
            </div>
            <div className="home-step-card">
              <div className="home-step-number">2</div>
              <h3>We come to you</h3>
              <p>
                A technician tests your vehicle where it's parked.
              </p>
            </div>
            <div className="home-step-card">
              <div className="home-step-number">3</div>
              <h3>Renew and go</h3>
              <p>
                We renew your registration and apply your new stickers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA Section */}
      <section className="home-cta-section container">
        <div className="home-cta-card">
          <h2>Ready to book?</h2>
          <div className="home-cta-buttons">
            <Link to="/book-now/" className="btn btn-primary">
              Book Now <ArrowRight size={18} />
            </Link>
            <a href="tel:3855354917" className="btn btn-outline">
              <Phone size={18} /> (385) 535-4917
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

