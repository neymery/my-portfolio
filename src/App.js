import React from "react";
import { Element } from "react-scroll";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
 

import "./styles.css";

function App() {
  return (
    <>
 

      {/* Navbar fixe */}
      <Navbar />

      {/* Sections avec Element pour le défilement fluide */}
      <Element name="home">
        <HeroSection />
      </Element>

      <Element name="achievements">
        <AchievementsSection />
      </Element>

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="projects">
        <ProjectsSection />
      </Element>

      <Element name="contact">
        <EmailSection />
      </Element>
    </>
  );
}

export default App;
