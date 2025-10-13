import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Button from "./button";

function Navbar({ toggleLanguage, currentLang, t }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 border-b border-gray-300 relative">
      <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
        Sylvan Groot
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex items-center gap-4">
        <Button href="#about">{t("nav.about")}</Button>
        <Button href="#experience">{t("nav.experience")}</Button>
        <Button href="#projects">{t("nav.projects")}</Button>
        <Button href="#work">{t("nav.work")}</Button>
        <Button href="mailto:Sylvan.Groot@outlook.com">{t("nav.contact")}</Button>
        <a
          href="https://github.com/sylvan-groot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/sylvan-groot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        </a>
        <button
          onClick={toggleLanguage}
          className="w-9 h-6 rounded-lg overflow-hidden text-white bg-gray-700 hover:border-blue-600 hover:bg-blue-600 transition"
        >
          <img
            src={`/flag/${currentLang}.png`}
            alt={currentLang === 'en' ? 'EN' : 'NL'}
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
