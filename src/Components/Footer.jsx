import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/img/Logomarca.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm"><img src={logo} alt="" />© 2024 Seu Site. Todos os direitos reservados.</p>
          </div>
          <div className="flex justify-center md:justify-end items-center space-x-4">
            {/* WhatsApp */}
            <a href="https://wa.me/seu-numero-de-telefone" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
