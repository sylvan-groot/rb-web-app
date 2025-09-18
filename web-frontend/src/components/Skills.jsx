import { useState, useEffect } from 'react';
import Button from './Button';
import '../App.css';

const skillSets = {
  Frontend: [
    { name: "JavaScript", exp: 70 },
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
          <div className="bg-gray-300 rounded-lg h-5 sm:h-5 md:h-6 overflow-hidden relative">
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