import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h3>Emissions on the Move</h3>
          <p>Convenient, reliable mobile emissions testing. We come to you.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/book-now">Book Now</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <Phone size={16} /> <span>(555) 123-4567</span>
            </li>
            <li>
              <Mail size={16} /> <span>info@emissionsonthemove.com</span>
            </li>
            <li>
              <MapPin size={16} /> <span>Serving the Greater Metro Area</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Emissions on the Move. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
