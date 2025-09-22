import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import Skills from './components/skills';
import Navbar from './components/navbar';
import { User, Puzzle, GraduationCap, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

function App() {
  const [data, setData] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://sr-groot.duckdns.org/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="px-8 sm:px-16 content bg-gradient-to-b from-[#FAF5EB] to-[#F9F9F9] min-h-screen">
        <Navbar />
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-4 min-h-0 md:min-h-[88vh]">
          <div className="md:w-1/2 w-full text-left pt-8 sm:pt-12 md:pt-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-2">
              {t("front.greeting")}
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-12 md:mb-20">
              {t("front.subtitle")}
            </h2>
            <button
              className="hidden md:inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
              onClick={handleScrollToAbout}
            >
              {t("front.about")} <ChevronDown className="inline-block" size={30} />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-center">
            <div className="relative">
              <img
                src="blob-profile-v3.png"
                alt="Profile"
                className="w-auto h-48 sm:w-auto sm:h-64 md:w-full md:h-[32rem]"
              />
            </div>
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="about" />
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-8'>{t("whoami.title")}</h1>
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
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-16'>{t("experience.title")}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
            {t("experience.subtitle")}
            {/* Frontend: HTML • CSS • JavaScript • React • Tailwind CSS<br/>
            Backend: Java • Spring Boot • Node.js • Express.js<br/>
            Database: MySQL • PostgreSQL • MongoDB<br/>
            Other: Git • Docker • AWS<br/> */}
          </p>
          <Skills />
        </div>
        <div className='py-4 border-b border-gray-300' id="projects" />
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-16'>{t("projects.title")}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
            {t("projects.subtitle")}
          </p>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mt-2 mb-4">Project mapbox markers</h2>
            <img
              src="mapbox.png"
              alt="Project 1"
              className="mx-auto mb-2"
            />
            <div className="p-6">
              <p className="text-gray-700">
                {t("projects.proj1")}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">Vue • Java • Node.js</span>
                <a
                  target="_blank"
                  href="https://github.com/sylvan-groot/Sumting-Mapbox"
                  className="text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mt-16">
            <h2 className="text-2xl font-bold text-blue-600 mt-2 mb-4">Project RTL text-detection</h2>
            <img
              src="rtl.png"
              alt="Project 2"
              className="mx-auto mb-2"
            />
            <div className="p-6">
              <p className="text-gray-700">
                {t("projects.proj2")}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">Python</span>
                <a
                  target="_blank"
                  href="https://github.com/sylvan-groot/RTL_Text_Detection_AI_Migrated"
                  className="text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mt-16">
            <h2 className="text-2xl font-bold text-blue-600 mt-2 mb-4">Project Pet-connect</h2>
            <img
              src="pet-connect.png"
              alt="Project 3"
              className="mx-auto mb-2"
            />
            <div className="p-6">
              <p className="text-gray-700">
                {t("projects.proj3")}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">Vue • Python • Node.js</span>
                <a
                  target="_blank"
                  href="https://github.com/sylvan-groot/Pet_Connect_Migrated"
                  className="text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
