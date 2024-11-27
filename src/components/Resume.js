/* eslint-disable no-undef */
import React from "react";
import profileImage from "../assets/profile-image.png";
import resumeData from "../data/resumeData";
import "../styles/components-styles.css";
import "../styles/main.css";

const Resume = () => {
  const { personalInfo, education, experience } = resumeData; // إضافة experience

  return (
    <section id="resume" className="section resume-section">
      <h2 className="heading resume-heading">My Resume</h2>
      <div className="resume-container">
        {/* Section for Personal Info */}
        <div className="resume-info">
          <div className="resume-image-container">
            <img src={profileImage} alt="Profile" className="resume-image" />
          </div>
          <div className="resume-content">
            {personalInfo.map((info, index) => (
              <p key={index} className="resume-detail">
                <strong>{info.label}:</strong> {info.value}
              </p>
            ))}
          </div>
        </div>

        <hr className="resume-divider" />

        {/* Section for Education */}
        <div className="resume-card">
          <h3 className="resume-title">Education</h3>
          <div className="resume-education-container">
            {education.map((edu, index) => (
              <div className="resume-education" key={index}>
                <p>
                  <strong>{edu.degree}</strong>
                  <br />
                  {edu.institution}
                  <br />
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="resume-divider" />

        {/* Section for Experience */}
        <div className="resume-card">
          <h3 className="resume-title">Experience</h3>
          <div className="resume-experience-container">
            {experience.map((exp, index) => (
              <div className="resume-experience" key={index}>
                <p>
                  <strong>{exp.position}</strong>
                  <br />
                  {exp.company}
                  <br />
                  {exp.year}
                  <br />
                  <em>{exp.details}</em>
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="resume-divider" />
        {/* Section for training */}
        <div className="resume-card">
          <h3 className="resume-title">Training and Certificates</h3>
          <div className="resume-training-container">
            {resumeData.training.map((training, index) => (
              <div className="resume-training" key={index}>
                <p>
                  <strong>
                    {"=> "}
                    {training.course}
                  </strong>
                  <em>
                    {training.institution}
                    {" {"}
                    {training.year}
                    {"}"}{" "}
                  </em>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
