import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGlobal } from "react-icons/ai";
import { VscChevronDown } from "react-icons/vsc";
import logo from "../assets/Logo-Octetus.png";
import logoRyp from "../assets/Logo-rypCloud.png";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-10 transition duration-300 ease-in-out ${
        isScrolled ? "bg-[#393939] bg-opacity-80 shadow-lg" : "bg-[#393939]"
      }`}
    >
      <div className="flex items-center justify-between py-3 px-6">
        <div>
          <img src={logo} alt="Logo Octetus" className="w-20 h-20" />
        </div>
        <div className="flex-1 flex justify-center space-x-6 text-lg roboto-regular">
          <div className="flex gap-16 justify-around">
            <a
              href="#home"
              className="text-white hover:underline hidden md:block"
            >
              {t('navbar.home')}
            </a>
            <a
              href="#about"
              className="text-white hover:underline hidden md:block"
            >
               {t('navbar.about')}
            </a>
            <a
              href="#services"
              className="text-white hover:underline hidden md:block"
            >
               {t('navbar.services')}
            </a>
            <a
              href="#contact"
              className="text-white hover:underline hidden md:block"
            >
               {t('navbar.contact')}
            </a>
            <div className="relative hidden md:block">
              <button
                className="flex items-center space-x-2 text-white"
                onClick={toggleLanguageMenu}
              >
                <AiOutlineGlobal size={25} />
                <span>{i18n.language === "en" ? "EN" : "ES"}</span>
                <VscChevronDown size={25} />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-gray-800 rounded-md shadow-lg">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage("es")}
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    ES
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <img src={logoRyp} alt="Logo RYP" className="w-24 h-24" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-800 text-white transform roboto-regular ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="my-6">
            <a href="#home" className="text-xl hover:underline">
            {t('navbar.home')}
            </a>
          </li>
          <li className="my-6">
            <a href="#about" className="text-xl hover:underline">
            {t('navbar.about')}
            </a>
          </li>
          <li className="my-6">
            <a href="#services" className="text-xl hover:underline">
            {t('navbar.services')}
            </a>
          </li>
          <li className="my-6">
            <a href="#contact" className="text-xl hover:underline">
            {t('navbar.contact')}
            </a>
          </li>
          <div className="mt-12">
            <button
              className="flex items-center space-x-2 text-white"
              onClick={toggleLanguageMenu}
            >
              <AiOutlineGlobal size={25} />
              <span>{i18n.language === "en" ? "EN" : "ES"}</span>
              <VscChevronDown size={25} />
            </button>
            {isLanguageMenuOpen && (
              <div className="mt-2 w-24 bg-gray-600 rounded-md shadow-lg">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("es")}
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  ES
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
      <div
        className={`fixed inset-y-0 left-0 bg-black ${
          isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out w-1/2`}
        onClick={toggleMenu}
      ></div>
       
    </nav>
  );
};

export default NavBar;
