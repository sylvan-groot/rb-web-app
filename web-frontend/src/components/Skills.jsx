import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuestion } from 'react-icons/fa';
import Button from './button';
import '../App.css';

const skillSets = {
  Frontend: [
    { name: "JavaScript", exp: 70, info: "Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text Test text" },
    { name: "React", exp: 80 },
    { name: "React Native", exp: 60 },
    { name: "Vue.js", exp: 70 },
    { name: "Tailwind CSS", exp: 60 },
    { name: "Bootstrap", exp: 50 }
  ],
  Backend: [
    { name: "Python", exp: 80 },
    { name: "Java", exp: 70 },
    { name: "Node.js", exp: 75 },
    { name: "PHP", exp: 50 }
  ],
  Frameworks: [
    { name: "Spring Boot", exp: 60 },
    { name: "Express.js", exp: 40 },
    { name: "Django", exp: 80 },
    { name: "Flask", exp: 80 },
    { name: "FastAPI", exp: 70 },
  ],
  Databases: [
    { name: "MySQL / MariaDB - SQL", exp: 80 },
    { name: "PostgreSQL - SQL", exp: 70 },
    { name: "MongoDB - NoSQL", exp: 60 },
    { name: "Data modeling & ER diagrams", exp: 70 }
  ],
  Other: [
    { name: "Git", exp: 80 },
    { name: "Docker", exp: 70 },
    { name: "AWS", exp: 50 },
    { name: "Linux", exp: 50 },
    { name: "Agile work methods", exp: 70 },
    { name: "AI technology", exp: 80 }
  ]
};

function Skills() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Frontend");
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    setVisible(true);
  }, [selected]);

  const skills = skillSets[selected];

  return (
    <div className="w-full md:w-4/5 max-w-xl mx-auto mt-6">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {Object.keys(skillSets).map((key) => (
          <Button
            key={key}
            className={`${selected === key
              ? "after:w-full text-blue-600"
              : ""
              }`}
            onClick={() => {
              setSelected(key);
              setTooltipIndex(null);
            }}
          >
            {t(`experience.${key}`)}
          </Button>
        ))}
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4 relative">
          <span className="font-bold block mb-1 text-center">{skill.name}</span>

          {/* Bar container */}
          <div className="relative bg-gray-300 rounded-lg h-5 sm:h-5 md:h-6 overflow-hidden">
            <div
              className="bar-fill"
              style={{ width: visible ? `${skill.exp}%` : "0%" }}
            >
              <span className="bar-label">{skill.exp}%</span>
            </div>
          </div>

          {/* Question mark button, outside the bar */}
          <button
            className="absolute right-0 top-3 md:right-[-2rem] md:top-9 
                      -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300 text-gray-700 
                      flex items-center justify-center text-sm hover:bg-gray-400"
            onClick={() => setTooltipIndex(tooltipIndex === index ? null : index)}
          >
            <FaQuestion size={10} />
          </button>

          {/* Tooltip */}
          {tooltipIndex === index && (
            <div
              className="absolute top-full -mt-5 md:-mt-7 
                        right-0 md:-right-[15rem]
                        w-48 bg-white text-gray-800 
                        p-3 rounded-lg shadow-lg z-20"
            >
              <button
                onClick={() => setTooltipIndex(null)}
                className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-sm font-bold"
              >
                ✕
              </button>
              <p className="text-base text-xs sm:text-sm text-gray-700 mt-1">
                {skill.info}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Skills;