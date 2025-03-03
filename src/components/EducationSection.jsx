import React from "react";

const educationData = [
  {
    title: "Full-Stack Developer Training",
    institution: "",
    year: "2023 - 2025",
    description:
    "Intensive full-stack web development training program focused on active learning and hands-on project simulation. This immersive experience is designed to align with industry standards, emphasizing teamwork, project management, and the application of agile methodologies and tools. Through collaborative projects, I gained practical skills in both front-end and back-end development, preparing me for real-world challenges in the tech industry."
   },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-black text-white py-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
      </div>

      {/* Cartes d'éducation */}
      <div className="max-w-4xl mx-auto px-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#181818]-900 p-6 rounded-xl shadow-lg  shadow-purple-500 transition duration-300 mb-6"
          >
            <h3 className="text-2xl font-bold text-purple-300">{edu.title}</h3>
            <p className="text-lg text-gray-400">{edu.institution}</p>
            <p className="text-md text-green-400 font-semibold">{edu.year}</p>
            <p className="text-gray-300 mt-3">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
