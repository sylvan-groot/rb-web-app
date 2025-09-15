import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/button';
import Footer from './components/Footer';
import Skills from './components/skills';
import { User, Puzzle, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://sr-groot.duckdns.org/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="App">
      <div className="px-8 sm:px-16 content bg-gradient-to-b from-[#FAF5EB] to-[#F9F9F9] min-h-screen">
        <nav className="flex items-center justify-between py-4 border-b border-gray-300">
          <div className="text-2xl font-bold text-blue-600">Sylvan Groot</div>
          <div className="flex items-center gap-4">
            <Button href="#about">About</Button>
            <Button href="#experience">Experience</Button>
            <Button href="#projects">Projects</Button>
            <Button href="mailto:Sylvan.Groot@outlook.com">Contact</Button>
            <a href="https://github.com/sylvan-groot" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
            <a href="https://linkedin.com/in/sylvan-groot-a49412176" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
          </div>
        </nav>
        <div className="min-h-[88vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-4">
          <div className="md:w-1/2 w-full text-left">
            <h2 className='text-5xl font-bold text-blue-700 mb-2'>Welcome!</h2>
            <h2 className="text-3xl text-gray-700 mb-20">
              I'm Sylvan. I build modern web applications using React and Spring Boot.
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-center">
            <div className="relative">
              <img
                src="blob-profile-2.png"
                alt="Profile"
                className="w-128 h-128"
              />
            </div>
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="about" />
        <div className="text-center my-8 max-w-2xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-8'>Who am I</h1>
          <div className="flex items-center justify-between">
            <p className='text-xl text-gray-700 mt-4 text-left'>
              24 Year old software developer from the Netherlands. I have been learning programming for 8 years now and have experience with various programming languages and frameworks.
            </p>
            <User className="w-16 h-16 text-gray-500 opacity-70 flex-shrink-0" />
          </div>

          <div className="flex items-center justify-between">
            <p className='text-xl text-gray-700 mt-12 text-left'>
              My interest in programming started because I wanted to work with computers and I was also great at puzzle solving. I have since then been developing my skills on many different sides of IT.
            </p>
            <Puzzle className="w-14 h-14 text-gray-500 opacity-70 flex-shrink-0 mt-10" />
          </div>

          <div className="flex items-center justify-between">
            <p className='text-xl text-gray-700 mt-12 text-left'>
              I have finished my bachelor's degree in HBO-ICT and gained practical experience through internships and personal projects.
            </p>
            <GraduationCap className="w-14 h-14 text-gray-500 opacity-70 flex-shrink-0 mt-10" />
          </div>
        </div>
        <div className='py-4 border-b border-gray-300' id="experience" />
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-16'>Programming experience</h1>
          <p className='text-xl text-gray-700 mt-8'>
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
          <p className='text-xl text-gray-700 mt-4'>
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
