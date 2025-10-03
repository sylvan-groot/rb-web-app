import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import Skills from './components/skills';
import Navbar from './components/navbar';
import FloatingNav from './components/floatingNav';
import Project from './components/project';
import WorkExperience from './components/workExp';
import { motion } from "motion/react"
import { User, Puzzle, GraduationCap, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

function App() {
  const [data, setData] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('nl');

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((projects) => setData(projects))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/data/work.json")
      .then((res) => res.json())
      .then((work) => setWorkExp(work))
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
        <FloatingNav
          toggleLanguage={toggleLanguage}
          currentLang={language}
          t={t}
        />
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-4 min-h-0 md:min-h-[88vh]">
          <div className="md:w-1/2 w-full text-left pt-8 sm:pt-12 md:pt-0">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-blue-700 mb-4"
            >
              {t("front.greeting")}
            </motion.h1>
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
                src="frontpage/frontpage-profile-light.png"
                alt="Profile"
                className="w-full md:max-h-[40rem] object-contain"
              />
            </div>
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="about" />
        <div className="my-8 max-w-3xl mx-auto space-y-6">
          <h1 className='text-center text-4xl font-bold text-blue-600 mt-8'>{t("whoami.title")}</h1>
          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              {t("whoami.para1")}
            </p>
            <User className="w-12 h-12 text-blue-600 flex-shrink-0 hidden sm:block" />
          </div>

          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              {t("whoami.para2")}
            </p>
            <Puzzle className="w-12 h-12 text-blue-600 flex-shrink-0 hidden sm:block" />
          </div>

          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              {t("whoami.para3")}
            </p>
            <GraduationCap className="w-12 h-12 text-blue-600 flex-shrink-0 hidden sm:block" />
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="experience" />
        <div className="my-8 max-w-3xl mx-auto">
          <h1 className='text-center text-4xl font-bold text-blue-600 mt-16'>{t("experience.title")}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
            {t("experience.subtitle")}
          </p>
          <Skills apiEndpoint={"/api/skills"} />
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
        <div className='py-4 border-b border-gray-300' id="work" />
        <div className="my-8 max-w-3xl mx-auto">
          <h1 className="text-center text-4xl font-bold text-blue-600 mt-16">
            Work experience
          </h1>
          <div className="mt-10 mb-10 space-y-8 md:border-l-2 md:border-gray-300 md:pl-6">
            {workExp.Work?.map((exp, index) => (
              <WorkExperience
                key={index}
                title={exp.title}
                company={exp.company}
                duration={exp.duration}
                info={t(exp.info)}
                last={index === workExp.Work.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
