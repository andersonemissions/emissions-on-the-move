import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  FileText,
  Truck,
  Check,
  ArrowRight,
  Clock,
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
          <h1>Our Mobile Services</h1>
          <p className="subtitle">
            Everything you need to stay street legal in Utah County—handled right in your driveway.
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
                <h2>On-The-Spot Registration Renewal (OTS)</h2>
                <p className="service-lead">
                  Skip the DMV lines and the postal wait. As an authorized Utah On-The-Spot station,
                  we process your renewal electronically and hand you official license plate decals
                  and updated registration right in your driveway.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Official State Decals Affixed On-Site</strong>
                      <p>New expiration stickers placed directly on your license plate during your visit.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Updated Registration Card Printed</strong>
                      <p>Receive your official, valid Utah registration card immediately.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Instant Electronic DMV Sync</strong>
                      <p>Vehicle records update directly in the state database with zero delay.</p>
                    </div>
                  </div>
                </div>

                <div className="service-actions">
                  <Link to="/book-now/" className="btn btn-primary">
                    Book With Registration Renewal <ArrowRight size={18} />
                  </Link>
                  <Link to="/pricing/" className="btn btn-outline">
                    View Pricing & Options
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
                  <div className="ots-stat-bar" style={{ marginBottom: "1.25rem", borderTop: "none", paddingTop: 0 }}>
                    <div className="ots-stat">
                      <Clock size={20} />
                      <span>~10 Min Total Visit</span>
                    </div>
                    <div className="ots-stat">
                      <CheckCircle2 size={20} />
                      <span>0 DMV Trips</span>
                    </div>
                  </div>
                  <div className="service-checklist-box" style={{ margin: 0, textAlign: "left" }}>
                    <h3>What to Have Ready:</h3>
                    <ul>
                      <li><Check size={16} className="bullet-icon" /> DMV renewal reminder or current registration</li>
                      <li><Check size={16} className="bullet-icon" /> Vehicle keys</li>
                      <li><Check size={16} className="bullet-icon" /> Payment for state registration fees + service</li>
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
                <h2>Mobile Emissions Testing</h2>
                <p className="service-lead">
                  Fast, compliant mobile emissions testing performed right in your driveway, garage,
                  or parking lot.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>State-Certified Inspection</strong>
                      <p>Quick computerized diagnostic check for 1996 and newer gas and hybrid vehicles.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Instant Electronic Certificate</strong>
                      <p>Passed inspections transmit immediately to the Utah County and state database.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Free 15-Day Retest Guarantee</strong>
                      <p>If repairs are needed, we come back and retest your vehicle for free within 15 days.</p>
                    </div>
                  </div>
                </div>

                <div className="pricing-preview-badge">
                  <span>From <strong>{usd(PRICES.flexible)}</strong> for flexible 2-hr window • <strong>{usd(PRICES.exact)}</strong> for exact time</span>
                </div>

                <div className="service-actions">
                  <Link to="/book-now/" className="btn btn-primary">
                    Book Emissions Test <ArrowRight size={18} />
                  </Link>
                  <Link to="/faq/" className="btn btn-outline">
                    Emissions FAQs
                  </Link>
                </div>
              </div>

              <div className="service-detail-sidebox">
                <div className="info-card-box">
                  <ShieldCheck size={40} className="box-icon" />
                  <h3>Vehicle Eligibility</h3>
                  <p>Standard 1996 and newer OBD-II passenger cars, light trucks, and SUVs registered anywhere in Utah.</p>
                  <div className="box-highlight">
                    <strong>Multi-Vehicle Discount</strong>
                    <p>Test additional vehicles at the same visit for only {usd(PRICES.additionalVehicle)} each.</p>
                  </div>
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
                <h2>Mobile VIN Inspections (TC-661)</h2>
                <p className="service-lead">
                  Required when titling an out-of-state vehicle, trailer, or RV in Utah. Our certified
                  inspectors physically verify your VIN and sign official Utah Tax Commission Form TC-661 right at your doorstep.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Certified Inspection Completed On-Site</strong>
                      <p>Fully signed Form TC-661 documentation ready for your Utah title application.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Pair With Emissions in One Visit</strong>
                      <p>Combine VIN verification, emissions testing, and renewal stickers in a single appointment.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>No Towing or Trip Permits Needed</strong>
                      <p>Save time and avoid driving unregistered vehicles across town to an inspection station.</p>
                    </div>
                  </div>
                </div>

                <div className="service-actions">
                  <Link to="/book-now/" className="btn btn-primary">
                    Book VIN Inspection <ArrowRight size={18} />
                  </Link>
                  <a href="tel:3855354917" className="btn btn-outline">
                    <Phone size={18} /> Call Us
                  </a>
                </div>
              </div>

              <div className="service-detail-sidebox">
                <div className="info-card-box">
                  <FileText size={40} className="box-icon" />
                  <h3>When Is Form TC-661 Required?</h3>
                  <ul className="simple-check-list">
                    <li>Vehicles titled outside Utah</li>
                    <li>New residents moving to Utah</li>
                    <li>Out-of-state purchases & dealer transfers</li>
                    <li>Trailers, motorhomes, and commercial units</li>
                  </ul>
                  <div className="box-highlight" style={{ marginTop: "1.25rem" }}>
                    <strong>Official State Document:</strong>
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
                <h2>Business & Commercial Fleet Testing</h2>
                <p className="service-lead">
                  Keep company vehicles compliant without taking them out of service or wasting employee hours.
                  We inspect your fleet on-site at your yard, warehouse, or office in a single scheduled visit.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Tiered Volume Rates</strong>
                      <p>Discounted per-vehicle pricing structured around your fleet size.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Non-Disruptive Scheduling</strong>
                      <p>Early morning, off-shift, or phased visits so active jobs stay on schedule.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Consolidated Invoicing & Reports</strong>
                      <p>Itemized digital invoice with electronic certificates ready for corporate accounting.</p>
                    </div>
                  </div>
                </div>

                <div className="service-actions">
                  <a href="tel:3855354917" className="btn btn-primary">
                    <Phone size={18} /> Call (385) 535-4917 for Fleet Quote
                  </a>
                  <Link to="/contact/" className="btn btn-outline">
                    Request Fleet Information
                  </Link>
                </div>
              </div>

              <div className="service-detail-sidebox">
                <div className="info-card-box">
                  <Truck size={40} className="box-icon" />
                  <h3>Fleet Program Highlights</h3>
                  <ul className="simple-check-list">
                    <li>On-site registration renewals & decals</li>
                    <li>Annual compliance tracking & reminders</li>
                    <li>Dedicated account contact & priority booking</li>
                    <li>Passenger cars, pickups, & commercial vans</li>
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
          <h2>Ready to Schedule Your Mobile Service?</h2>
          <p>
            Choose your date and time online, or contact us directly with any questions.
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

export default Services;
