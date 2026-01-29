import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Emissions Due? <br />
            We Come To You!
          </h1>
          <p>Currently serving anywhere in Utah County.</p>
          <div className="hero-buttons">
            <Link to="/book-now" className="btn btn-primary">
              Book Now
            </Link>
            <Link to="/pricing" className="btn btn-primary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <Clock size={40} className="feature-icon" />
          <h3>Save Time</h3>
          <p>
            No waiting in lines! Schedule a time that works for you and we'll be
            there!
          </p>
        </div>
        <div className="feature-card">
          <MapPin size={40} className="feature-icon" />
          <h3>We Come to You</h3>
          <p>
            We'll service your car wherever you're at! Home, Work, and anywhere
            inbetween.
          </p>
        </div>
        <div className="feature-card">
          <CheckCircle size={40} className="feature-icon" />
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
            station to wherever you're at, saving you valuable time and effort.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
