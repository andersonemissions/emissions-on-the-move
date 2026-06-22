import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="page home-page page-fade-in">
      <SEO path="/" />

      <section className="hero">
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <h1>
              Emissions Due? <br /><span className="text-green">We Come To You!</span>
            </h1>
            <p className="hero-subtitle">
              Convenient, reliable mobile emissions testing. Serving all of Utah County!
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

      <section className="features container">
        <h2 className="sr-only">Mobile emissions testing benefits</h2>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Clock size={32} />
          </div>
          <h3>Save Time</h3>
          <p>
            Skip the lines! Schedule a time that works best for you and we'll be
            there!
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <MapPin size={32} />
          </div>
          <h3>We Come to You</h3>
          <p>
            We'll service your car wherever you're at! Home, Work, Anywhere you
            need.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <CheckCircle size={32} />
          </div>
          <h3>Certified Service</h3>
          <p>
            Licensed and certified technicians you can trust for all your
            Emissions and Registration needs.
          </p>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <p>
            Emissions on the Move is dedicated to making your registration and
            renewal hassle-free. Our mobile service brings the inspection
            station to wherever you're at, saving you valuable time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
