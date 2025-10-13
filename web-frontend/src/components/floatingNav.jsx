import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./button";

function FloatingNav({ toggleLanguage, currentLang, t }) {
    const [showHamburger, setShowHamburger] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 768) {
                setShowHamburger(true);
            } else {
                if (window.scrollY > 100) {
                    setShowHamburger(true);
                } else {
                    setShowHamburger(false);
                    setMenuOpen(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {showHamburger && (
                    <motion.button
                        key="hamburger"
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        exit={{ x: 200 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="fixed top-6 right-6 z-50 p-3 
                                text-black rounded-full shadow-none
                                sm:bg-gradient-to-r sm:from-blue-600 sm:to-blue-500 
                                sm:bg-transparent sm:text-white sm:shadow-lg"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={menuOpen ? "close" : "open"}
                                initial={{ rotate: 0, opacity: 0 }}
                                animate={{ rotate: 180, opacity: 1 }}
                                exit={{ rotate: -180, opacity: 0 }}
                                transition={{ duration: 0.1, ease: "easeInOut" }}
                            >
                                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Slide-out menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-52 bg-white shadow-2xl z-40 flex flex-col justify-between p-6"
                    >
                        <div className="flex flex-col gap-4 mt-8">
                            <Button href="#about" noUnderline onClick={() => setMenuOpen(false)}>{t("nav.about")}</Button>
                            <Button href="#experience" noUnderline onClick={() => setMenuOpen(false)}>{t("nav.experience")}</Button>
                            <Button href="#projects" noUnderline onClick={() => setMenuOpen(false)}>{t("nav.projects")}</Button>
                            <Button href="#work" noUnderline onClick={() => setMenuOpen(false)}>{t("nav.work")}</Button>
                            <Button href="mailto:Sylvan.Groot@outlook.com" noUnderline onClick={() => setMenuOpen(false)}>{t("nav.contact")}</Button>
                        </div>

                        <div className="flex flex-col items-start gap-2 mt-8 border-t pt-4">
                            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Sylvan Groot</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/sylvan-groot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-600"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sylvan-groot/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-600"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <button
                                    onClick={() => {
                                        toggleLanguage();
                                        setMenuOpen(false);
                                    }}
                                    className="w-8 h-5 rounded-lg overflow-hidden text-white bg-gray-700 hover:border-blue-600 hover:bg-blue-600 transition"
                                >
                                    <img
                                        src={`/flag/${currentLang}.png`}
                                        alt={currentLang === 'en' ? 'EN' : 'NL'}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default FloatingNav;
