import React, { useState, useRef } from "react";
import { Mail, Phone, Send } from "lucide-react";
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
    <div className="page contact-page">
      <div className="container split-layout">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>
            Have questions or need to schedule a special appointment? Reach out
            to us!
          </p>

          <div className="contact-method">
            <Phone className="icon" size={24} />
            <div>
              <h3>Phone</h3>
              <p>(385) 392-6701</p>
            </div>
          </div>

          <div className="contact-method">
            <Mail className="icon" size={24} />
            <div>
              <h3>Email</h3>
              <p>andersonemissions@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
            {status !== "sending" && (
              <Send size={16} style={{ marginLeft: "8px" }} />
            )}
          </button>

          {status === "success" && (
            <p
              style={{
                marginTop: "1rem",
                color: "var(--primary)",
                fontWeight: 600,
              }}
            >
              ✅ Message sent! We'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ marginTop: "1rem", color: "red", fontWeight: 600 }}>
              ❌ Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
