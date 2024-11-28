// src/components/About.js
import React from "react";
import "../styles/about.css";
import "../styles/main.css";
import profileImage from "../assets/profile-image.png";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="personal-info">
            <h2>Omar Monib</h2>
            <h3>Front-End Developer</h3>
            <p>
              <FaUser className="icon" />
              Omar Mohamed Abdel-Halim Monib
            </p>
            <p>
              <FaEnvelope className="icon" /> omar.monib.03@gmail.com
            </p>
            <p>
              <FaPhone className="icon" /> +20 101 009 4107
            </p>
          </div>

          {/* قسم الأيقونات */}
          <div className="social-icons">
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
              href="https://wa.me/201010094107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="social-icon" />
            </a>
            <a
              href="https://github.com/omarmonib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>

        <div className="description-section">
          <h2 className="heading">About Me</h2>
          <p>
            Passionate front-end developer with expertise in creating
            interactive and responsive web applications using React. Skilled in
            HTML, CSS, and JavaScript, I focus on crafting dynamic user
            interfaces with a seamless user experience. My strong understanding
            of responsive design principles ensures smooth performance across
            all devices.
          </p>

          <div className="skills-section">
            <h1>Skills</h1>
            {[
              { skill: "HTML", level: "100%" },
              { skill: "CSS", level: "90%" },
              { skill: "JavaScript", level: "70%" },
              { skill: "React", level: "65%" },
              { skill: "Python", level: "45%" },
              { skill: "Linux", level: "60%" },
              {
                skill: "Photoshop, Windows, and Microsoft Office",
                level: "70%",
              },
            ].map(({ skill, level }) => (
              <div key={skill} className="skill">
                <span>{skill}</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: level }}>
                    {level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
