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
  { id: "on-the-spot", label: "On-The-Spot Renewal", icon: Award },
  { id: "emissions-testing", label: "Emissions Testing", icon: ShieldCheck },
  { id: "vin-inspections", label: "VIN Inspections (TC-661)", icon: FileText },
  { id: "fleet-testing", label: "Fleet Testing", icon: Truck },
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

  return (
    <div className="page services-page page-fade-in">
      <SEO path="/services/" />

      {/* Simplified Compact Header */}
      <section className="services-compact-header">
        <div className="container">
          <h1>Our Mobile Services</h1>
          <p className="subtitle">
            Certified emissions testing, on-the-spot DMV registration renewals, and VIN inspections anywhere in Utah County.
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
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="container services-tab-view">
        <div className="services-panel-wrapper">
          {/* Previous Service Arrow */}
          <button
            type="button"
            className="service-nav-arrow service-nav-arrow-prev"
            onClick={goToPrev}
            aria-label={`Previous service: ${TABS[prevIndex].label}`}
            title={`Previous: ${TABS[prevIndex].label}`}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next Service Arrow */}
          <button
            type="button"
            className="service-nav-arrow service-nav-arrow-next"
            onClick={goToNext}
            aria-label={`Next service: ${TABS[nextIndex].label}`}
            title={`Next: ${TABS[nextIndex].label}`}
          >
            <ChevronRight size={26} />
          </button>

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
                  Skip the DMV lines and the postal wait. As an authorized Utah On-The-Spot renewal station,
                  we process your state registration renewal electronically and hand you official license
                  plate decals and updated registration card right on site.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Official State Decals Handed to You</strong>
                      <p>New expiration stickers affixed directly to your license plate during your appointment.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Updated Registration Card Printed on the Spot</strong>
                      <p>Drive with peace of mind—your state registration card is valid and printed immediately.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Instant Electronic DMV Sync</strong>
                      <p>Results and registration records update directly in the Utah DMV system without delays.</p>
                    </div>
                  </div>
                </div>

                <div className="service-checklist-box">
                  <h3>What to Have Ready for Renewal:</h3>
                  <ul>
                    <li><Check size={16} className="bullet-icon" /> Utah DMV renewal reminder postcard or existing registration card</li>
                    <li><Check size={16} className="bullet-icon" /> Your vehicle keys</li>
                    <li><Check size={16} className="bullet-icon" /> Payment for state registration fees + mobile service</li>
                  </ul>
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
                  <div className="ots-showcase-text">
                    <span className="ots-badge-tag">State-Certified Provider</span>
                    <h3>Official Utah DMV On-The-Spot Station</h3>
                    <p>
                      Authorized by the Utah Division of Motor Vehicles to issue valid registration
                      renewals and plate stickers on-site anywhere in Utah County.
                    </p>
                  </div>
                  <div className="ots-stat-bar">
                    <div className="ots-stat">
                      <Clock size={20} />
                      <span>~10 Min Total Visit</span>
                    </div>
                    <div className="ots-stat">
                      <CheckCircle2 size={20} />
                      <span>0 DMV Trips</span>
                    </div>
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
                  or parking lot. We test passenger cars, pickup trucks, SUVs, and commercial vans.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Full OBD-II Diagnostic Scan</strong>
                      <p>Certified equipment connects directly to your vehicle's onboard diagnostic port.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Electronic State Certificate</strong>
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
                  <span>From <strong>{usd(PRICES.flexible)}</strong> for flexible 2-hr window • <strong>{usd(PRICES.exact)}</strong> for exact time • <strong>{usd(PRICES.additionalVehicle)}</strong> per extra vehicle</span>
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
                  <p>We test standard 1996 and newer OBD-II passenger cars, light trucks, and SUVs registered anywhere in Utah.</p>
                  <div className="box-highlight">
                    <strong>Need multiple cars tested?</strong>
                    <p>Save money by booking multiple vehicles at the same location for just {usd(PRICES.additionalVehicle)} each.</p>
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
                  <span className="service-pill">Utah State Form TC-661</span>
                </div>
                <h2>Mobile VIN Inspections (Certificate of Inspection)</h2>
                <p className="service-lead">
                  Bought a car, trailer, motorcycle, or RV from out of state? Or recently moved to Utah?
                  Our state-certified inspectors verify your Vehicle Identification Number (VIN) and
                  complete Utah State Tax Commission Form TC-661 right at your doorstep.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Official TC-661 Paperwork Completed On-Site</strong>
                      <p>Fully compliant documentation ready for Utah title application and registration.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Pair With Your Emissions Test</strong>
                      <p>Combine emissions testing, VIN inspection, and renewal in a single 15-minute appointment.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>No Towing or Temporary Permits Needed</strong>
                      <p>Avoid driving unregistered or out-of-state vehicles across town just to get inspected.</p>
                    </div>
                  </div>
                </div>

                <div className="service-actions">
                  <Link to="/book-now/" className="btn btn-primary">
                    Book VIN Inspection <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://files.tax.utah.gov/tax/forms/current/tc-661.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <FileText size={16} /> View Form TC-661 (PDF) <ExternalLink size={14} />
                  </a>
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
                  Keep company vehicles on the road and 100% compliant without wasting employee hours
                  or pulling vehicles from active jobs. We come to your company yard, warehouse, or office
                  to inspect your entire fleet in one scheduled visit.
                </p>

                <div className="service-feature-points">
                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Volume Fleet Discounts</strong>
                      <p>Tiered pricing tailored to the size of your fleet.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Flexible Working Hours</strong>
                      <p>Morning, midday, or batch scheduling so vehicle routes aren't interrupted.</p>
                    </div>
                  </div>

                  <div className="feature-point">
                    <CheckCircle2 size={20} className="feature-icon" />
                    <div>
                      <strong>Consolidated Invoicing & Digital Reports</strong>
                      <p>Single invoice for corporate accounting with complete pass/fail certificates attached.</p>
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
                  <h3>Fleet Service Benefits</h3>
                  <ul className="simple-check-list">
                    <li>Zero employee downtime</li>
                    <li>No vehicle transport or waiting in shops</li>
                    <li>On-site registration renewals available</li>
                    <li>Annual compliance reminder schedule</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

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
          <div className="home-cta-trust">
            <span>✓ Driveway & workplace visits</span>
            <span>✓ Official Utah DMV decals issued</span>
            <span>✓ State-certified mobile technicians</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
