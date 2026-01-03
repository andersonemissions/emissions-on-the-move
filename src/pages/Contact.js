import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    // In a real app, this would send data to a backend or email service.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page contact-page">
      <div className="container split-layout">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>
            Have questions or need to schedule a specialappointment? Reach out
            to us!
          </p>

          <div className="contact-method">
            <Phone className="icon" size={24} />
            <div>
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div className="contact-method">
            <Mail className="icon" size={24} />
            <div>
              <h3>Email</h3>
              <p>info@emissionsonthemove.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Send Message <Send size={16} style={{ marginLeft: "8px" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
