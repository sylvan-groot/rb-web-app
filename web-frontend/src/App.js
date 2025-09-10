import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/button';
import Skills from './components/skills';

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
      <div className="px-8 sm:px-16">
        <nav className="flex items-center justify-between py-4 border-b border-gray-300">
          <div className="text-2xl font-bold text-blue-600">Sylvan Groot</div>
          <div>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
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
        <div className="text-center">
          <h1 className='text-4xl font-bold text-blue-600 mt-8'>About</h1>
          <p className='text-xl text-gray-700 mt-4'>
            24 Year old software developer from the Netherlands. I have been learning programming for 8 years now and have experience with various programming languages and frameworks.
            My interest in programming started because I wanted to work with computers and I was also great at puzzle solving. I have since then been developing my skills on many different sides of IT.
            I have finished my bachelor's degree in HBO-ICT and gained practical experience through internships and personal projects.
          </p>
          <h1 className='text-4xl font-bold text-blue-600 mt-8'>Programming experience</h1>
          <p className='text-xl text-gray-700 mt-4'>
            I have worked with many different programming languages and frameworks. This includes:<br/>
            {/* Frontend: HTML • CSS • JavaScript • React • Tailwind CSS<br/>
            Backend: Java • Spring Boot • Node.js • Express.js<br/>
            Database: MySQL • PostgreSQL • MongoDB<br/>
            Other: Git • Docker • AWS<br/> */}
          </p>
          <Skills />
          <h1 className='text-4xl font-bold text-blue-600 mt-8'>Projects</h1>
          <p className='text-xl text-gray-700 mt-4'>
            Here are some of the projects I have worked on:
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
