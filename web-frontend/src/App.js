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
      <div className="px-8 sm:px-16 content">
        <nav className="flex items-center justify-between py-4 border-b border-gray-300">
          <div className="text-2xl font-bold text-blue-600">Sylvan Groot</div>
          <div className="flex items-center gap-4">
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
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
              <div className="absolute w-72 h-72 bg-red-200 rounded-full -right-10 -top-10 opacity-30"></div>
              <div className="absolute w-56 h-56 bg-red-400 rounded-full right-0 top-20 opacity-10"></div>
              <div className="absolute w-60 h-60 bg-red-300 rounded-full right-20 top-30 opacity-20"></div>
              <img
                src=""
                alt="Profile"
                className="w-64 h-64 rounded-full relative z-10"
              />
            </div>
          </div>
        </div>
        <div className='py-4 border-b border-gray-300'/>
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
        <div className='py-4 border-b border-gray-300'/>
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-16'>Programming experience</h1>
          <p className='text-xl text-gray-700 mt-8'>
            I have worked with many different programming languages and frameworks. This includes:<br/>
            {/* Frontend: HTML • CSS • JavaScript • React • Tailwind CSS<br/>
            Backend: Java • Spring Boot • Node.js • Express.js<br/>
            Database: MySQL • PostgreSQL • MongoDB<br/>
            Other: Git • Docker • AWS<br/> */}
          </p>
          <Skills />
        </div>
        <div className='py-4 border-b border-gray-300'/>
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h1 className='text-4xl font-bold text-blue-600 mt-16'>Projects</h1>
          <p className='text-xl text-gray-700 mt-4'>
            Here are some of the projects I have worked on:
          </p>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mt-16">
            <img
              src="/images/project1.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600">Project</h2>
              <p className="text-gray-700 mt-2">
                Project Description
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">React • Node.js</span>
                <a
                  href="https://github.com/yourusername/project1"
                  className="text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mt-16">
            <img
              src="/images/project1.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600">Project</h2>
              <p className="text-gray-700 mt-2">
                Project Description
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">React • Node.js</span>
                <a
                  href="https://github.com/yourusername/project1"
                  className="text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition mt-16">
            <img
              src="/images/project1.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600">Project</h2>
              <p className="text-gray-700 mt-2">
                Project Description
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">React • Node.js</span>
                <a
                  href="https://github.com/yourusername/project1"
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
