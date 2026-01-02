import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'E-Commerce App', desc: 'Full-stack site with React and Node.', link: 'https://github.com/yourrepo' },
  // Add more projects
];

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.desc}</p>
            <a href={project.link} className="text-pink-500 hover:underline">View on GitHub</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;