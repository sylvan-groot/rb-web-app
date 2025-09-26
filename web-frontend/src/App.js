import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import Skills from './components/skills';
import Navbar from './components/navbar';
import Project from './components/project';
import { motion } from "motion/react"
import { User, Puzzle, GraduationCap, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

function App() {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((projects) => setData(projects))
      .catch((err) => console.error(err));
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'nl' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="px-8 sm:px-16 content bg-gradient-to-b from-[#FAF5EB] to-[#F9F9F9] min-h-screen">
        <Navbar
          toggleLanguage={toggleLanguage}
          currentLang={language}
          t={t}
        />
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-4 min-h-0 md:min-h-[88vh]">
          <div className="md:w-1/2 w-full text-left pt-8 sm:pt-12 md:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-blue-700 mb-4">
              {t("front.greeting")}
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl text-gray-600 mb-12 md:mb-20 leading-relaxed">
              {t("front.subtitle")}
            </p>
            <button
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition"
              onClick={handleScrollToAbout}
            >
              {t("front.about")} <ChevronDown className="animate-bounce-slow" size={28} />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-center">
            <div className="relative">
              <img
                src="frontpage-profile-light.png"
                alt="Profile"
                className="w-full max-w-md md:max-h-[42rem] object-contain"
              />
            </div>
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="about" />
        <div className="my-8 max-w-3xl mx-auto">
          <h1 className='text-center text-4xl font-bold text-blue-600 mt-8'>{t("whoami.title")}</h1>
          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
              {t("whoami.para1")}
            </p>
            <User className="w-16 h-16 text-gray-500 opacity-70 flex-shrink-0 ml-2" />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
              {t("whoami.para2")}
            </p>
            <Puzzle className="w-14 h-14 text-gray-500 opacity-70 flex-shrink-0 ml-2" />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
              {t("whoami.para3")}
            </p>
            <GraduationCap className="w-14 h-14 text-gray-500 opacity-70 flex-shrink-0 ml-2" />
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="experience" />
        <div className="my-8 max-w-3xl mx-auto">
          <h1 className='text-center text-4xl font-bold text-blue-600 mt-16'>{t("experience.title")}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
            {t("experience.subtitle")}
          </p>
          <Skills />
        </div>
        <div className='py-4 border-b border-gray-300' id="projects" />
        <div className="my-8 max-w-3xl mx-auto">
          <h1 className='text-center text-4xl font-bold text-blue-600 mt-16'>{t("projects.title")}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
            {t("projects.subtitle")}
          </p>

          {data.map((p) => (
            <Project
              key={p.id}
              name={p.projName}
              desc={language === 'en' ? p.projDescEn : p.projDescNl}
              languages={[p.codeLang1, p.codeLang2, p.codeLang3, p.codeLang4]}
              imgUrl={p.imgUrl}
              gitRepoLink={p.hasGitRepo ? p.gitRepoLink : null}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
