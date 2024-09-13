import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGlobal } from "react-icons/ai";
import logo from "../assets/Preview.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-[#393939] shadow-lg z-10">
      <div className="flex items-center justify-around py-3">
        <div>
          <img src={logo} alt="" className="w-16 h-16" />
        </div>
        {/* Enlaces de navegación visibles solo en pantallas grandes */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:underline">
            Home
          </a>
          <a href="#about" className="text-white hover:underline">
            About
          </a>
          <a href="#services" className="text-white hover:underline">
            Services
          </a>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </div>
        {/* Botón de idioma visible solo en pantallas grandes */}
        <div className="hidden md:flex items-center space-x-2 text-white">
          <span>ESP</span>
          <AiOutlineGlobal size={25} />
        </div>
        {/* Botón de menú hamburguesa visible solo en pantallas móviles */}
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
      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="mb-6">
            <a href="#home" className="text-xl hover:underline">
              Home
            </a>
          </li>
          <li className="mb-6">
            <a href="#about" className="text-xl hover:underline">
              About
            </a>
          </li>
          <li className="mb-6">
            <a href="#services" className="text-xl hover:underline">
              Services
            </a>
          </li>
          <li className="mb-6">
            <a href="#contact" className="text-xl hover:underline">
              Contact
            </a>
          </li>
          {/* Botón de idioma visible solo en pantallas móviles */}
          <div className="flex items-center justify-center mt-6 md:hidden">
            <span className="mr-2">ESP</span>
            <AiOutlineGlobal size={25} />
          </div>
        </ul>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
    </nav>
  );
};

export default NavBar;
