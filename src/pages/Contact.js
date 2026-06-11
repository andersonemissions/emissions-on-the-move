import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_rqf7adh";
const TEMPLATE_ID = "template_z3b0fuc";
const PUBLIC_KEY = "1-0nDf6qJD8c1BpJx";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="page contact-page page-fade-in">
      <div className="container contact-layout">
        <div className="contact-details">
          <h1>Get in Touch</h1>
          <p style={{ color: "var(--text-light)", fontSize: "1.05rem", marginBottom: "2rem" }}>
            Have questions or need to schedule a special appointment? Reach out
            to us!
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>
              <div className="contact-info-text">
                <h4>Call or Text</h4>
                <p>(385) 392-6701</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div className="contact-info-text">
                <h4>Email</h4>
                <p>andersonemissions@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-info-text">
                <h4>Coverage Area</h4>
                <p>Testing anywhere in Utah county</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                id="name"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="name">Your Name</label>
            </div>
            
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                id="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="email">Email Address</label>
            </div>
            
            <div className="form-group">
              <textarea
                className="form-input"
                id="message"
                name="message"
                rows="5"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
                style={{ resize: "vertical", minHeight: "120px" }}
              ></textarea>
              <label className="form-label" htmlFor="message">Your Message</label>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
              style={{ width: "100%" }}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
              {status !== "sending" && (
                <Send size={16} style={{ marginLeft: "8px" }} />
              )}
            </button>

            {status === "success" && (
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "var(--primary)",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                ✅ Message sent! We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p style={{ marginTop: "1.5rem", color: "red", fontWeight: 600, textAlign: "center" }}>
                ❌ Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
