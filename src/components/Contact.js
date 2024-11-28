import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", subject: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Start sending process

    emailjs
      .send(
        "service_xyz6spp",
        "template_8ztke7f",
        formData,
        "C3kZteKvtzbx4pigo"
      )
      .then(
        (result) => {
          setIsSending(false); // End sending process
          alert("Message sent successfully!");
          resetForm(); // Reset form fields
        },
        (error) => {
          setIsSending(false); // End sending process
          setErrorMessage("Failed to send message. Please try again."); // Show error message
        }
      );
  };

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
            href="https://www.facebook.com/omar.monib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/omar-monib/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/omarmonib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}{" "}
        {/* Show error message if exists */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}{" "}
            {/* Show sending status */}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
