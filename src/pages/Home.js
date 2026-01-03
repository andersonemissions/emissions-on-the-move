import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Fast, Mobile Car Emissions Testing</h1>
          <p>Skip the line. We come to your home or office.</p>
          <div className="hero-buttons">
            <Link to="/book-now" className="btn btn-primary">
              Book Now
            </Link>
            <Link to="/pricing" className="btn btn-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <Clock size={40} className="feature-icon" />
          <h3>Save Time</h3>
          <p>No waiting in lines. We schedule a time that works for you.</p>
        </div>
        <div className="feature-card">
          <MapPin size={40} className="feature-icon" />
          <h3>We Come to You</h3>
          <p>
            Service available at your home, workplace, or anywhere convenient.
          </p>
        </div>
        <div className="feature-card">
          <CheckCircle size={40} className="feature-icon" />
          <h3>Certified Service</h3>
          <p>Fully licensed and certified inspectors for all testing needs.</p>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <p>
            Emissions on the Move is dedicated to making vehicle inspections
            hassle-free. Our mobile service brings the inspection station to
            your driveway, saving you valuable time and effort.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
