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
              Fast, certified mobile emissions testing, on-the-spot registration renewals,
              and VIN inspections. We come directly to your driveway or workplace in Utah County!
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
          <div className="trust-badge-ots">
            <img
              src={otsLogo}
              alt="Authorized Station On The SPOT Renewal"
              className="ots-badge-img"
              width="180"
              height="101"
            />
            <div className="trust-badge-text">
              <strong>Authorized Station</strong>
              <span>Utah DMV On-The-Spot Renewals</span>
            </div>
          </div>
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
          <span className="section-eyebrow">Comprehensive Mobile Services</span>
          <h2>Everything You Need, Right at Your Door</h2>
          <p className="section-subtitle">
            Skip the long DMV queues and noisy mechanics. We handle your complete inspection
            and registration in one convenient visit.
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
              Full OBD-II scan and visual inspection for passenger vehicles, trucks, and SUVs.
              Results are uploaded immediately and electronically to the Utah DMV.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> 10–15 minute on-site test
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Instant digital certificate
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Free 15-day retest if needed
              </li>
            </ul>
          </div>

          {/* Service 2: On The Spot Renewal */}
          <div className="service-card service-card-highlight">
            <div className="service-icon-wrapper">
              <Award size={32} />
            </div>
            <span className="service-pill service-pill-highlight">Official DMV Decals</span>
            <h3>On-The-Spot Registration Renewal</h3>
            <p>
              Don't wait in line at the DMV or wait weeks for the mail. As an authorized On The Spot
              station, we process your registration and hand you your official sticker on the spot.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> Get new license plate decals
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Updated registration card in hand
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Zero DMV trip required
              </li>
            </ul>
          </div>

          {/* Service 3: VIN Inspections */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <FileText size={32} />
            </div>
            <span className="service-pill">Form TC-661</span>
            <h3>Mobile VIN Inspections</h3>
            <p>
              Moving to Utah or bought an out-of-state vehicle? Our certified inspectors verify your
              VIN and complete official Utah State Form TC-661 during your appointment.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> Official TC-661 paperwork
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Out-of-state vehicle titling
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Done right in your driveway
              </li>
            </ul>
          </div>

          {/* Service 4: Fleet Services */}
          <div className="service-card">
            <div className="service-icon-wrapper">
              <Truck size={32} />
            </div>
            <span className="service-pill">Commercial & Fleets</span>
            <h3>Business Fleet Testing</h3>
            <p>
              Keep your company vehicles compliant without disrupting business operations. We come to
              your lot or facility to test your entire fleet with volume pricing and custom scheduling.
            </p>
            <ul className="service-bullets">
              <li>
                <Check size={16} className="bullet-icon" /> Volume fleet discounts
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> On-site at your business
              </li>
              <li>
                <Check size={16} className="bullet-icon" /> Consolidated reports & billing
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Quick & Painless</span>
            <h2>How Mobile Emissions Works</h2>
            <p className="section-subtitle">
              Three simple steps from scheduling to fresh registration stickers on your plate.
            </p>
          </div>

          <div className="home-steps-grid">
            <div className="home-step-card">
              <div className="home-step-number">1</div>
              <h3>Book in 60 Seconds</h3>
              <p>
                Pick your date and choose an exact appointment time or a flexible 2-hour window that fits your day.
              </p>
            </div>
            <div className="home-step-card">
              <div className="home-step-number">2</div>
              <h3>We Come To You</h3>
              <p>
                Our state-certified technician arrives at your home, workplace, or job site anywhere in Utah County.
              </p>
            </div>
            <div className="home-step-card">
              <div className="home-step-number">3</div>
              <h3>Pass, Renew & Done</h3>
              <p>
                We complete the test in ~10 minutes, process your renewal, and hand you your official decal.
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
            Book your mobile emissions test and On-The-Spot renewal online now, or call/text our Utah County team.
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

