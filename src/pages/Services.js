import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  FileText,
  Truck,
  Check,
  ArrowRight,
  Phone,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SEO from "../components/SEO";
import otsLogo from "../assets/on-the-spot-renewal-logo.png";
import { PRICES, usd } from "../data/pricing";

const TABS = [
  { id: "on-the-spot", label: "On-The-Spot Renewal", mobileLabel: "On-The-Spot", icon: Award },
  { id: "emissions-testing", label: "Emissions Testing", mobileLabel: "Emissions", icon: ShieldCheck },
  { id: "vin-inspections", label: "VIN Inspections (TC-661)", mobileLabel: "VIN Inspections", icon: FileText },
  { id: "fleet-testing", label: "Fleet Testing", mobileLabel: "Fleet Testing", icon: Truck },
];

const VALID_TAB_IDS = TABS.map((t) => t.id);

const Services = () => {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (VALID_TAB_IDS.includes(hash)) {
        return hash;
      }
    }
    return "on-the-spot";
  });

  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (VALID_TAB_IDS.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
  };

  const currentIndex = TABS.findIndex((t) => t.id === activeTab);
  const prevIndex = (currentIndex - 1 + TABS.length) % TABS.length;
  const nextIndex = (currentIndex + 1) % TABS.length;

  const goToPrev = () => {
    handleTabClick(TABS[prevIndex].id);
  };

  const goToNext = () => {
    handleTabClick(TABS[nextIndex].id);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="page services-page page-fade-in">
      <SEO path="/services/" />

      {/* Simplified Compact Header */}
      <section className="services-compact-header">
        <div className="container">
          <h1>Our Services</h1>
          <p className="subtitle">
            We come to you anywhere in Utah County.
          </p>
        </div>
      </section>

      {/* Sticky Tabs Bar */}
      <div className="services-sticky-tabs-bar">
        <div className="container">
          <div className="services-tabs-container" role="tablist" aria-label="Our mobile automotive services">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={tab.id}
                  id={`tab-${tab.id}`}
                  className={`service-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <Icon size={18} />
                  <span className="tab-label-full">{tab.label}</span>
                  <span className="tab-label-mobile">{tab.mobileLabel || tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="container services-tab-view">
        <div
          className="services-panel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Service Arrow (Desktop side gutters) */}
          <button
            type="button"
            className="service-nav-arrow service-nav-arrow-prev"
            onClick={goToPrev}
            aria-label={`Previous service: ${TABS[prevIndex].label}`}
            title={`Previous: ${TABS[prevIndex].label}`}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next Service Arrow (Desktop side gutters) */}
          <button
            type="button"
            className="service-nav-arrow service-nav-arrow-next"
            onClick={goToNext}
            aria-label={`Next service: ${TABS[nextIndex].label}`}
            title={`Next: ${TABS[nextIndex].label}`}
          >
            <ChevronRight size={26} />
          </button>

          {/* Mobile Stepper Controls (Top of card, never obstructs text) */}
          <div className="services-mobile-stepper" aria-label="Service navigation">
            <button
              type="button"
              className="mobile-stepper-btn"
              onClick={goToPrev}
              aria-label={`Previous service: ${TABS[prevIndex].label}`}
            >
              <ChevronLeft size={18} />
              <span>Prev</span>
            </button>

            <div className="mobile-stepper-indicator">
              <div className="stepper-dots">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleTabClick(t.id)}
                    className={`stepper-dot ${activeTab === t.id ? "active" : ""}`}
                    aria-label={`View ${t.label}`}
                  />
                ))}
              </div>
              <span className="stepper-text">
                Service {currentIndex + 1} of {TABS.length}
              </span>
            </div>

            <button
              type="button"
              className="mobile-stepper-btn"
              onClick={goToNext}
              aria-label={`Next service: ${TABS[nextIndex].label}`}
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Tab 1: On-The-Spot Renewal */}
          {activeTab === "on-the-spot" && (
          <section
            id="on-the-spot"
            role="tabpanel"
            aria-labelledby="tab-on-the-spot"
            className="service-detail-card featured-service tab-panel-fade"
          >
            <div className="service-detail-grid">
              <div className="service-detail-content">
                <div className="service-header-badge">
                  <span className="service-pill service-pill-highlight">Utah DMV Authorized</span>
                </div>
                <h2>On-The-Spot Renewal (OTS)</h2>
                <p className="service-lead">
                  Renew your registration during your test. We process it electronically and hand
                  you your stickers and updated registration card.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Stickers applied to your plate</strong>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Registration card printed on site</strong>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>DMV record updated instantly</strong>
                    </div>
                  </div>
                </div>

                <div className="service-actions">
                  <Link to="/book-now/" className="btn btn-primary">
                    Book Now <ArrowRight size={18} />
                  </Link>
                  <Link to="/pricing/" className="btn btn-outline">
                    View Pricing
                  </Link>
                </div>
              </div>

              <div className="service-detail-media">
                <div className="ots-showcase-card">
                  <img
                    src={otsLogo}
                    alt="Utah On The Spot Renewal Authorized Station Decal"
                    className="ots-showcase-decal"
                    width="344"
                    height="103"
                  />
                  <div className="service-checklist-box" style={{ margin: 0, textAlign: "left" }}>
                    <h3>Have ready</h3>
                    <ul>
                      <li><Check size={16} className="bullet-icon" /> DMV renewal reminder or current registration</li>
                      <li><Check size={16} className="bullet-icon" /> Vehicle keys</li>
                      <li><Check size={16} className="bullet-icon" /> Payment for state fees and service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 2: Mobile Emissions Testing */}
        {activeTab === "emissions-testing" && (
          <section
            id="emissions-testing"
            role="tabpanel"
            aria-labelledby="tab-emissions-testing"
            className="service-detail-card tab-panel-fade"
          >
            <div className="service-detail-grid">
              <div className="service-detail-content">
                <div className="service-header-badge">
                  <span className="service-pill">Utah County Certified</span>
                </div>
                <h2>Emissions Testing</h2>
                <p className="service-lead">
                  Computerized testing for 1996 and newer gas and hybrid vehicles, at your home,
                  work, or parking lot.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Results sent to the state instantly</strong>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Free retest within 15 days</strong>
                    </div>
                  </div>
                </div>

                <div className="pricing-preview-badge">
                  <span><strong>{usd(PRICES.flexible)}</strong> flexible 2-hour window • <strong>{usd(PRICES.exact)}</strong> exact time</span>
                </div>

                <div className="service-actions">
                  <Link to="/book-now/" className="btn btn-primary">
                    Book Now <ArrowRight size={18} />
                  </Link>
                  <Link to="/faq/" className="btn btn-outline">
                    Emissions FAQs
                  </Link>
                </div>
              </div>

              <div className="service-detail-sidebox">
                <div className="info-card-box">
                  <ShieldCheck size={40} className="box-icon" />
                  <h3>Eligibility</h3>
                  <p>1996+ OBD-II cars, light trucks, and SUVs registered anywhere in Utah. Add vehicles for {usd(PRICES.additionalVehicle)} each.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 3: Mobile VIN Inspections */}
        {activeTab === "vin-inspections" && (
          <section
            id="vin-inspections"
            role="tabpanel"
            aria-labelledby="tab-vin-inspections"
            className="service-detail-card tab-panel-fade"
          >
            <div className="service-detail-grid">
              <div className="service-detail-content">
                <div className="service-header-badge">
                  <span className="service-pill">Out-of-State & Titles</span>
                </div>
                <h2>VIN Inspections (TC-661)</h2>
                <p className="service-lead">
                  Required to title an out-of-state vehicle, trailer, or RV in Utah. We verify your
                  VIN and sign Form TC-661 at your door.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Signed TC-661 ready for your title application</strong>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Combine with emissions and renewal in one visit</strong>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>No towing or trip permits</strong>
                    </div>
                  </div>
                </div>

                <div className="service-actions">
                  <Link to="/book-now/" className="btn btn-primary">
                    Book Now <ArrowRight size={18} />
                  </Link>
                  <a href="tel:3855354917" className="btn btn-outline">
                    <Phone size={18} /> Call Us
                  </a>
                </div>
              </div>

              <div className="service-detail-sidebox">
                <div className="info-card-box">
                  <FileText size={40} className="box-icon" />
                  <h3>When is TC-661 required?</h3>
                  <ul className="simple-check-list">
                    <li>Vehicles titled outside Utah</li>
                    <li>New Utah residents</li>
                    <li>Out-of-state purchases and dealer transfers</li>
                    <li>Trailers, motorhomes, and commercial units</li>
                  </ul>
                  <div className="box-highlight" style={{ marginTop: "1.25rem" }}>
                    <strong>Official form:</strong>
                    <a
                      href="https://files.tax.utah.gov/tax/forms/current/tc-661.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        color: "var(--primary)",
                        fontWeight: 700,
                        marginTop: "0.4rem",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                      }}
                    >
                      Utah Form TC-661 (PDF) <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 4: Business Fleet Testing */}
        {activeTab === "fleet-testing" && (
          <section
            id="fleet-testing"
            role="tabpanel"
            aria-labelledby="tab-fleet-testing"
            className="service-detail-card tab-panel-fade"
          >
            <div className="service-detail-grid">
              <div className="service-detail-content">
                <div className="service-header-badge">
                  <span className="service-pill">Commercial & Corporate</span>
                </div>
                <h2>Fleet Testing</h2>
                <p className="service-lead">
                  We test your company vehicles at your yard, warehouse, or office in one scheduled visit.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Volume pricing by fleet size</strong>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Off-shift or phased scheduling</strong>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>One invoice, all certificates</strong>
                    </div>
                  </div>
                </div>

                <div className="service-actions">
                  <a href="tel:3855354917" className="btn btn-primary">
                    <Phone size={18} /> Call (385) 535-4917
                  </a>
                  <Link to="/contact/" className="btn btn-outline">
                    Request Fleet Info
                  </Link>
                </div>
              </div>

              <div className="service-detail-sidebox">
                <div className="info-card-box">
                  <Truck size={40} className="box-icon" />
                  <h3>Also included</h3>
                  <ul className="simple-check-list">
                    <li>On-site renewals</li>
                    <li>Annual compliance reminders</li>
                    <li>Dedicated account contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

          {/* Mobile Bottom Navigation (Easy advancement after reading) */}
          <div className="services-mobile-bottom-nav">
            <button
              type="button"
              className="mobile-bottom-nav-btn prev"
              onClick={goToPrev}
              aria-label={`Previous service: ${TABS[prevIndex].label}`}
            >
              <ChevronLeft size={18} />
              <div className="mobile-bottom-nav-text">
                <span className="nav-sub">Previous</span>
                <span className="nav-title">{TABS[prevIndex].mobileLabel || TABS[prevIndex].label}</span>
              </div>
            </button>

            <button
              type="button"
              className="mobile-bottom-nav-btn next"
              onClick={goToNext}
              aria-label={`Next service: ${TABS[nextIndex].label}`}
            >
              <div className="mobile-bottom-nav-text">
                <span className="nav-sub">Next</span>
                <span className="nav-title">{TABS[nextIndex].mobileLabel || TABS[nextIndex].label}</span>
              </div>
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>

      {/* Services Bottom CTA */}
      <section className="services-bottom-cta container">
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

export default Services;
