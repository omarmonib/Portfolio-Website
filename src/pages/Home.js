import React from "react";
import "../styles/components-styles.css";
import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
