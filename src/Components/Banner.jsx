import React from 'react';
import { motion } from 'framer-motion';
import FotoMarcone from '../assets/img/fotor-20240412185333.png';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="" id="banner">
      <motion.section
        id="#"
        className="bg-gradient-to-r from-black via-[#6f42c1] to-black md:p-8 relative overflow-hidden mt-24 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/2 md:pr-4 lg:pr-8 flex justify-center items-center">
            <div className="text-center md:text-left md:ml-32">
              <h1 className="text-5xl font-bold mb-4 text-amber-400">Marcone Silva de Brito</h1>
              <p className="text-white text-justify text-orange-30 text-2xl mb-8 mt-8">Front-End Developer</p>
              <p className='text-yellow-600 text-justify text-orange-30 text-2xl mb-8 mt-8'><em>"Escrevo códigos e contribuo para transformar a Web com bytes de informação"</em></p>
              <a
                href="https://wa.me/38992182727"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mt-4 text-amber-400 inline-block"
              >
                Fale Comigo
              </a>
              <div className="flex  justify-center md:justify-start  mt-4">
                {/* WhatsApp */}
                <a href="https://wa.me/38992182727" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaWhatsapp className="h-6 w-6 mr-4 ml-4"/>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/marconesb/" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaLinkedin className="h-6 w-6 mr-4" />
                </a>
                 {/* Github */}
                 <a href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaGithub className="h-6 w-6 mr-4" />
                </a> 

              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-0 flex justify-center items-center">
            <motion.img
              src={FotoMarcone}
              alt="Descrição da imagem"
              className="rounded-xl max-w-full h-auto mt-8 md:mt-0 mb-8 max-h-86"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Banner;
