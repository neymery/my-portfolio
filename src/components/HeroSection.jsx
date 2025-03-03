import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  // Fonction pour faire défiler vers une section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-32 pb-20 bg-black text-white">
      {/* Left Side - Text */}
      <motion.div
        className="w-full md:w-1/2 text-left space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hello, I'm
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold">Mobile Developer</h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Passionate about creating high-performance mobile applications with a seamless user experience.
        </p>
        <div className="flex gap-6 mt-6 pt-10">
          {/* Hire Me Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </motion.button>

          {/* Download CV Button */}
          <motion.a
            href="/cv.pdf" // Remplace par le chemin correct de ton CV
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg md:text-xl font-bold border-2 border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-all"
          >
            Download CV
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-8  ">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-purple-500 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-purple-500 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-purple-500 transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-purple-500 transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-purple-500 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="https://discord.com/users/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-purple-500 transition-all"
          >
            <FaDiscord />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-3xl text-gray-400 hover:text-purple-500 transition-all"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
      
      {/* Right Side - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-80 h-80 md:w-96 md:h-96 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.4 }}
        >
          <img src="/images/hero-pic.jpg" alt="Hero" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
