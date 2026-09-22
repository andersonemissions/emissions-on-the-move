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
  Check,
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
              Emissions Testing & DMV Renewals, <br />
              <span className="text-green">Wherever You Are.</span>
            </h1>
            <p className="hero-subtitle">
              We come to your home or workplace anywhere in Utah County. Complete
              your inspection and get your new DMV stickers in about 10 minutes.
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

      {/* Trust & Accreditation Banner */}
      <section className="trust-bar">
        <div className="container trust-bar-container">
          <Link
            to="/services/#on-the-spot"
            className="trust-badge-ots-link"
            title="Learn more about our Utah DMV Authorized On-The-Spot Renewal Station"
          >
            <img
              src={otsLogo}
              alt="Authorized Station On The SPOT Renewal"
              className="ots-badge-img ots-badge-img-lg"
              width="214"
              height="64"
              fetchPriority="high"
            />
            <div className="trust-badge-text">
              <strong>Authorized Station</strong>
              <span>Utah DMV On-The-Spot Renewals →</span>
            </div>
          </Link>
          <div className="trust-divider" />
          <div className="trust-points">
            <div className="trust-point-item">
              <Clock className="trust-icon" size={20} />
              <span>
                <strong>10-Minute</strong> Driveway Service
              </span>
            </div>
            <div className="trust-point-item">
              <ShieldCheck className="trust-icon" size={20} />
              <span>
                <strong>State-Certified</strong> Technicians
              </span>
            </div>
            <div className="trust-point-item">
              <CheckCircle2 className="trust-icon" size={20} />
              <span>
                <strong>15-Day Free</strong> Retest Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section container">
        <div className="section-header">
          <span className="section-eyebrow">Mobile Services</span>
          <h2>What We Do</h2>
          <p className="section-subtitle">
            No DMV lines, no shop visits. We handle your inspection and renewal in one quick stop.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1: Emissions Testing */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <ShieldCheck size={32} />
            </div>
            <span className="service-pill">Utah County Certified</span>
            <h3>Mobile Emissions Testing</h3>
            <p>
              Fast, state-certified vehicle emissions inspection performed right in your driveway.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> 10–15 minute on-site test
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Instant electronic DMV upload
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Free 15-day retest guarantee
              </li>
            </ul>
            <Link to="/services/#emissions-testing" className="service-card-link">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>

          {/* Service 2: On The Spot Renewal */}
          <div className="service-card service-card-highlight">
            <div className="service-floating-badge">★ DMV Authorized</div>
            <div className="service-icon-wrapper">
              <Award size={32} />
            </div>
            <span className="service-pill service-pill-highlight">Official DMV Decals</span>
            <h3>On-The-Spot Registration Renewal</h3>
            <p>
              Renew your registration during your test—skip the DMV lines and postal wait entirely.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> Official state decals affixed on-site
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Updated registration card printed
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Instant electronic DMV sync
              </li>
            </ul>
            <Link to="/services/#on-the-spot" className="service-card-link">
              Learn More About Renewals <ArrowRight size={14} />
            </Link>
          </div>

          {/* Service 3: VIN Inspections */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <FileText size={32} />
            </div>
            <span className="service-pill">Out-of-State & Titles</span>
            <h3>Mobile VIN Inspections</h3>
            <p>
              Official Utah State Tax Commission Form TC-661 completed directly at your doorstep.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> Required for out-of-state titles
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> State-certified physical verification
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Combine with emissions in 1 visit
              </li>
            </ul>
            <Link to="/services/#vin-inspections" className="service-card-link">
              Learn More About VINs <ArrowRight size={14} />
            </Link>
          </div>

          {/* Service 4: Fleet Services */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <Truck size={32} />
            </div>
            <span className="service-pill">Commercial & Fleets</span>
            <h3>Business Fleet Testing</h3>
            <p>
              Keep company vehicles compliant without taking them off the road or wasting employee hours.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> Volume discounts for multiple units
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Scheduled at your yard or facility
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Consolidated invoicing & reports
              </li>
            </ul>
            <Link to="/services/#fleet-testing" className="service-card-link">
              Learn More About Fleets <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">How It Works</span>
            <h2>How Mobile Emissions Works</h2>
            <p className="section-subtitle">
              From booking to new stickers on your plate.
            </p>
          </div>

          <div className="home-steps-grid">
            <div className="home-step-card">
              <div className="home-step-number">1</div>
              <h3>Book in 60 Seconds</h3>
              <p>
                Pick your day and choose an exact appointment time or a discounted 2-hour window.
              </p>
            </div>
            <div className="home-step-card">
              <div className="home-step-number">2</div>
              <h3>We Come To You</h3>
              <p>
                A certified technician arrives equipped to test your vehicle right where it's parked.
              </p>
            </div>
            <div className="home-step-card">
              <div className="home-step-number">3</div>
              <h3>Renew & Drive</h3>
              <p>
                We complete your inspection, renew your registration, and apply new decals on the spot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA Section */}
      <section className="home-cta-section container">
        <div className="home-cta-card">
          <h2>Ready to Skip the DMV Line?</h2>
          <p>
            Book your test and registration renewal online, or call/text us anytime.
          </p>
          <div className="home-cta-buttons">
            <Link to="/book-now/" className="btn btn-primary">
              Book Online Now <ArrowRight size={18} />
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

