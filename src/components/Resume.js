// src/components/Resume.js
import React from "react";
import "../styles/components-styles.css";
import "../styles/main.css";
import pdfFile from "../assets/CV_Omar_Monib.pdf";

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <h2 className="heading resume-heading">My Resume</h2>
      <div className="pdf-container">
        <iframe
          src={pdfFile}
          title="Omar Moneeb's CV"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      </div>
    </section>
  );
};

export default Resume;
