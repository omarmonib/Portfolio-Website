// src/components/Header.js
import React from "react";
import { Link } from "react-scroll";
import "../styles/header.css";
import "../styles/main.css";
import profileImage from "../assets/profile2.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <Link to="header" smooth={true} duration={500}>
              Header
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <img src={profileImage} alt="Profile" className="background-image" />
      <div className="header-text">
        <h1>Hi, I'm Omar</h1>
        <p className="subtitle">Front-End Developer</p>
        <p className="description">
          I specialize in creating responsive, user-friendly websites using the
          latest web technologies.
        </p>
      </div>
    </header>
  );
};

export default Header;
