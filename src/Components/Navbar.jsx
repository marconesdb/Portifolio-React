import React, { useState } from 'react';
import Logomarca from '../assets/img/img-logo.png';
import '../Components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center w-20 h-8">
            <img src={Logomarca} alt="Logo" className="h-20 rounded" />
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="block h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex md:items-center">
            <a
              href="#banner"
              className="text-white px-3 py-2 rounded-md text-sm  border-b hover:border-yellow-400 border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300 font-bold"
            >
              Início
            </a>

            <a
              href="#sobre"
              className="text-white px-3 py-2 rounded-md text-sm font-bold border-b hover:border-yellow-400 border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300"
            >
             Sobre mim
            </a>

            <a
              href="#projetos"
              className="text-white px-3 py-2 rounded-md text-sm font-bold border-b border-transparent hover:border-yellow-400 hover:border-orange400 hover:text-gray-500 transition duration-300"
            >
              Projetos
            </a>

            <a
              href="#skills"
              className="text-white px-3 py-2 rounded-md text-sm font-bold border-b hover:border-yellow-400 border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#contato"
              className="text-white px-3 py-2 rounded-md text-sm font-bold border-b border-transparent hover:border-orange400 hover:text-gray-500 transition hover:border-yellow-400 duration-300"
            >
             Contato
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white z-20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#inicio"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </a>
            <a
              href="#sobre-mim"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre mim
            </a>
            <a
              href="#projetos"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projetos
            </a>
            <a
              href="#skills"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href=""
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
