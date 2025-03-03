import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const languages = [
  { name: "Arabic", level: 100 },
  { name: "French", level: 80 },
  { name: "English", level: 80 },
];

const LanguagesSection = () => {
  const [progress, setProgress] = useState(languages.map(() => 0));

  useEffect(() => {
    setTimeout(() => {
      setProgress(languages.map((lang) => lang.level));
    }, 500);
  }, []);

  return (<>
    <h2 className="text-4xl font-bold text-white-500 mb-6">Languages</h2>
    <section className="bg-black p-6 rounded-xl shadow-lg shadow-purple-500 transition duration-300 mb-6">
      <div className="text-center">
        
        <p className="text-gray-400 max-w-xl mx-auto">
          I am a native Arabic speaker, fluent in French (B2), and have a strong command of English (B2).
        </p>
      </div>

      {/* Définir un dégradé SVG */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" /> {/* Violet */}
            <stop offset="100%" stopColor="#ec4899" /> {/* Rose */}
          </linearGradient>
        </defs>
      </svg>

      <div className="flex justify-center gap-8 mt-10 ">
        {languages.map((lang, index) => (
          <div key={index} className="w-32">
            <CircularProgressbar
              value={progress[index]}
              text={`${progress[index]}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "url(#gradient)", // Appliquer le dégradé ici
                trailColor: "#2d2d2d",
                textSize: "16px",
              })}
            />
            <p className="mt-4 text-center text-gray-300">{lang.name}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default LanguagesSection;