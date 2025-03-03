import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguagesSection from "./LanguagesSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";

const AboutSection = () => {
  const [selectedTab, setSelectedTab] = useState("skills");

  return (
    <section className="bg-black text-white py-12 md:py-20 px-4 md:px-6 text-center" id="about">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-4 mb-6 md:mb-12">
        About Me
      </h2>

      <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        I am a full-stack web developer with a passion for creating interactive and responsive web applications.
      </p>

      {/* Boutons de sélection */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 md:mt-8">
        {[
          { id: "education", label: "Education" },
          { id: "skills", label: "Skills" },
          { id: "certificates", label: "Certificates" },
          { id: "languages", label: "Languages" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSelectedTab(id)}
            className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-bold rounded-lg transition-all duration-300 
              ${selectedTab === id ? "bg-purple-600 text-white shadow-lg scale-105" : "bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white"}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Contenu affiché */}
      <div className="mt-8 md:mt-12">
        <AnimatePresence mode="wait">
          {selectedTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SkillsSection />
            </motion.div>
          )}
          {selectedTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EducationSection />
            </motion.div>
          )}
          {selectedTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg md:text-xl text-gray-300">🎓 Certifications will be displayed here...</p>
            </motion.div>
          )}
          {selectedTab === "languages" && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LanguagesSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;