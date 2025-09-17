import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "NL" : "EN"));
  }

  return (
    <nav className="flex items-center justify-between py-4 border-b border-gray-300 relative">
      <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
        Sylvan Groot
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex items-center gap-4">
        <Button href="#about">About</Button>
        <Button href="#experience">Experience</Button>
        <Button href="#projects">Projects</Button>
        <Button href="mailto:Sylvan.Groot@outlook.com">Contact</Button>
        <a
          href="https://github.com/sylvan-groot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        </a>
        <a
          href="https://linkedin.com/in/sylvan-groot-a49412176"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        </a>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-lg text-sm bg-gray-700 text-white hover:bg-blue-600 transition"
        >
          {language}
        </button>
      </div>

      {/* Pop-up Menu */}
      <div className="md:hidden">
        <button
          className="p-2 rounded-lg hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile view */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-50">
          <Button href="#about" onClick={() => setIsOpen(false)}>About</Button>
          <Button href="#experience" onClick={() => setIsOpen(false)}>Experience</Button>
          <Button href="#projects" onClick={() => setIsOpen(false)}>Projects</Button>
          <Button href="mailto:Sylvan.Groot@outlook.com" onClick={() => setIsOpen(false)}>Contact</Button>
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/sylvan-groot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://linkedin.com/in/sylvan-groot-a49412176"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
            {/* Language button mobile */}
            <button
              onClick={toggleLanguage}
              className="px-3 rounded-lg text-sm bg-gray-700 text-white hover:bg-blue-600 transition"
            >
              {language}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
