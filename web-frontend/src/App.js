import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Skills from './components/Skills';
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
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
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
        <div className="text-center my-8 max-w-2xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-8'>Who am I</h1>
          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
              24 Year old software developer from the Netherlands. I have been learning programming for 8 years now and have experience with various programming languages and frameworks.
            </p>
            <User className="w-16 h-16 text-gray-500 opacity-70 flex-shrink-0" />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
              My interest in programming started because I wanted to work with computers and I was also great at puzzle solving. I have since then been developing my skills on many different sides of IT.
            </p>
            <Puzzle className="w-14 h-14 text-gray-500 opacity-70 flex-shrink-0 mt-5" />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
              I have finished my bachelor's degree in HBO-ICT and gained practical experience through internships and personal projects.
            </p>
            <GraduationCap className="w-14 h-14 text-gray-500 opacity-70 flex-shrink-0 mt-5" />
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="experience" />
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-16'>Programming experience</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
            I have worked with many different programming languages and frameworks during my studies and internships.
            My experience between languages varies based on how much I have worked with them.
            Below is an overview of how I rate my proficiency with these technologies.
            {/* Frontend: HTML • CSS • JavaScript • React • Tailwind CSS<br/>
            Backend: Java • Spring Boot • Node.js • Express.js<br/>
            Database: MySQL • PostgreSQL • MongoDB<br/>
            Other: Git • Docker • AWS<br/> */}
          </p>
          <Skills />
        </div>
        <div className='py-4 border-b border-gray-300' id="projects" />
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-16'>Projects</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4">
            Here are some of the projects I have worked on:
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
                Create, manage and cluster custom markers by submitting information on a specific GPS-coordinate.
                This project utilizes the MapBox GL JS plugin to display an interactive map with the markers.
                Features include adding, editing, deleting using PostgreSQL and filtering markers based on categories.
                The database was hosted using AWS RDS (Relational Database Service) for extra security.
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
                This project uses AI based text-detection models such as EasyOCR and PyTesseract to detect and extract text from images.
                The main goal of this project was to create an application that can process both images and videos and return the frames containing text.
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
                A platform created to help adoption shelters reach a larger audience and help more pets find a loving home.
                The platform allows shelters to create profiles for their pets, manage adoptions and connect with potential adopters.
                Built using Vue.js as the frontend framework and Django REST framework for the backend. The data is stored in a MySQL database within a Dockerized backend and is integrated using Azure services.
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
