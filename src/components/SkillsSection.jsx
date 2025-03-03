import React from "react";

const skills = [
  { name: "HTML", image: " /icons/html5.svg" },
  { name: "CSS", image: "/icons/css3.svg" },
  { name: "JavaScript", image: "/icons/javascript.svg" },
  { name: "React", image: "/icons/react.svg" },
  { name: "Bootstrap", image: " /icons/bootstrap.svg" },
  { name: "PHP", image: "/icons/php.svg" },
  { name: "Tailwind CSS", image: "/icons/tailwindcss.svg" },
  { name: "MongoDB", image: "/images/mongodb.png" },
  { name: "Python", image: "/icons/python.svg" },
  { name: "Laravel", image: "/icons/laravel.svg" },
  { name: "Figma", image: "/icons/figma.svg" },
  { name: "Framer Motion", image: "/icons/framerMotion.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black text-white py-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">My Skills</h2>
      </div>

      {/* Grille des compétences */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6 md:px-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-purple-500 transition duration-300"
          >
            <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-3" />
            <span className="text-white font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
