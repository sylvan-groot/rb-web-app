import React, { useState, useEffect } from 'react';
import Button from './button';
import '../App.css';

const skillSets = {
  Frontend: [
    { name: "Java", exp: 85 },
    { name: "Python", exp: 75 },
    { name: "JavaScript", exp: 70 },
    { name: "SQL", exp: 65 }
  ],
  Backend: [
    { name: "React", exp: 80 },
    { name: "Spring Boot", exp: 70 },
    { name: "Node.js", exp: 60 },
    { name: "Express.js", exp: 55 }
  ],
  Frameworks: [
    { name: "Tailwind CSS", exp: 75 },
    { name: "Bootstrap", exp: 65 },
    { name: "Django", exp: 50 },
    { name: "Flask", exp: 45 }
  ],
  Other: [
    { name: "Git", exp: 80 },
    { name: "Docker", exp: 70 },
    { name: "AWS", exp: 60 },
    { name: "Linux", exp: 55 },
    { name: "Agile Methodologies", exp: 50 }
  ]
};

function Skills() {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState("Frontend");

    useEffect(() => {
        setVisible(true);
    }, [selected]);

    const skills = skillSets[selected];

  return (
    <div className="w-4/5 max-w-xl mx-auto mt-6">
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(skillSets).map((key) => (
          <Button
            key={key}
            className={`${
              selected === key
                ? "after:w-full text-blue-600"
                : ""
            }`}
            onClick={() => setSelected(key)}
          >
            {key}
          </Button>
        ))}
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="mb-5">
          <span className="font-bold mb-1 block">{skill.name}</span>
          <div className="bg-gray-300 rounded-lg h-6 overflow-hidden relative">
            <div
              className="bar-fill"
              style={{ width: visible ? `${skill.exp}%` : "0%" }}
            >
              <span className="bar-label">{skill.exp}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;