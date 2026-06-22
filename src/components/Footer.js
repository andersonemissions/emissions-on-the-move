import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>Emissions on the Move</h2>
          <p>Convenient, reliable mobile emissions testing. We come to you.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing/">Pricing</Link>
            </li>
            <li>
              <Link to="/faq/">FAQ</Link>
            </li>
            <li>
              <Link to="/book-now/">Book Now</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a
                href="tel:3853926701"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Phone size={16} />
                <span>(385) 392-6701</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:andersonemissions@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Mail size={16} />
                <span>andersonemissions@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/emissionsonthemove"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Instagram size={16} />
                <span>@emissionsonthemove</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61590274666347&rdid=qQ0syeZuw82vzCqG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DAZ3WBuW7%2F#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Facebook size={16} />
                <span>Emissions on the Move</span>
              </a>
            </li>
            <li>
              <MapPin size={16} />{" "}
              <span>Vehicle emissions testing for Utah County.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{`© ${currentYear} Emissions on the Move. All rights reserved.`}</p>
      </div>
    </footer>
  );
};

export default Footer;
