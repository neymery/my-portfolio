import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 70 },
    // Add more
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: `${skill.level}%` }} 
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-pink-500 h-2.5 rounded-full"
            ></motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;