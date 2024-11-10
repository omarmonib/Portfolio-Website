// src/components/Contact.js
import React from "react";
import "../styles/components-styles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="heading contact-heading">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            <FaEnvelope className="icon" /> omar.monib.03@gmail.com
          </p>
          <p>
            <FaWhatsapp className="icon" /> +20 101 009 4107
          </p>
        </div>

        <div className="social-media">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
