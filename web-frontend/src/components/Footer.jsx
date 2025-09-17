import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sylvan Groot</p>
          <a
            href="mailto:Sylvan.Groot@outlook.com"
            className="text-sm text-blue-600 hover:underline"
          >
            Sylvan.Groot@outlook.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="mailto:Sylvan.Groot@outlook.com" className="hover:text-blue-600">Contact</a>
          <a
            href="https://github.com/sylvan-groot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sylvan-groot-a49412176/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black-700 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
