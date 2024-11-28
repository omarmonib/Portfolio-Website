/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import profileImage from "../assets/profile-image.png";
import resumeData from "../data/resumeData";
import "../styles/resume.css";
import "../styles/main.css";

// Component to display personal information
const PersonalInfo = ({ personalInfo }) => (
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
);

// Component to display education details
const Education = ({ education }) => (
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
);

// Component to display work experience
const Experience = ({ experience }) => (
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
);

// Component to display training and certificates
const Training = ({ training }) => (
  <div className="resume-card">
    <h3 className="resume-title">Training and Certificates</h3>
    <div className="resume-training-container">
      {training.map((course, index) => (
        <div className="resume-training" key={index}>
          <p>
            <strong>{course.course}</strong>
            <br />
            <em>
              {course.institution}
              <br />
              {course.year}
            </em>
          </p>
        </div>
      ))}
    </div>
  </div>
);

// Main Resume component
const Resume = () => {
  const { personalInfo, education, experience, training } = resumeData;

  return (
    <section id="resume" className="section resume-section">
      <h2 className="heading resume-heading">My Resume</h2>
      <div className="resume-container">
        <PersonalInfo personalInfo={personalInfo} />
        <hr className="resume-divider" />
        <Education education={education} />
        <hr className="resume-divider" />
        <Experience experience={experience} />
        <hr className="resume-divider" />
        <Training training={training} />
      </div>
    </section>
  );
};

// Adding PropTypes for data validation
Resume.propTypes = {
  personalInfo: PropTypes.array,
  education: PropTypes.array,
  experience: PropTypes.array,
  training: PropTypes.array,
};

export default Resume;
