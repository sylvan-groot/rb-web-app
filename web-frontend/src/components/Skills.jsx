import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuestion } from 'react-icons/fa';
import Button from './button';
import '../App.css';

function Skills({ apiEndpoint }) {
  const [skillsData, setSkillsData] = useState({});
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Frontend");
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(apiEndpoint)
      .then(res => res.json())
      .then((data) => {
        // Remove duplicate categories
        const grouped = data.reduce((acc, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {});
        // Sort by exp number
        Object.keys(grouped).forEach(category => {
          grouped[category].sort((a, b) => b.exp - a.exp);
        });
        setSkillsData(grouped);
        setVisible(true);
      })
      .catch(err => console.error(err));
  }, [apiEndpoint]);

  useEffect(() => {
    setVisible(true);
  }, [selected]);

  const skills = skillsData[selected] || [];

  return (
    <div className="w-full md:w-4/5 max-w-xl mx-auto mt-6">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {Object.keys(skillsData).map((key) => (
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

          {/*Tooltip question mark button outside the bar */}
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