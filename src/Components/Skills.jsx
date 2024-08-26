import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGithub, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFigma } from 'react-icons/si'; // Importando o ícone do Figma

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementOffset = document.getElementById('skills').offsetTop;
      const windowHeight = window.innerHeight;
      const isVisible = scrollTop + windowHeight > elementOffset + 100;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="skills" className='bg-amber-500 min-h-screen'>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 5 }}
          className="p-8 md:p-16 flex justify-center flex-col items-center"
        >
          <h2 className="text-3xl font-bold text-center text-black mt-20 mb-40">Skills</h2>
          <div className="flex flex-wrap justify-center">
            {/* Adicionando o ícone do PHP */}
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-indigo-500 m-2"
            >
              <FaPhp title="PHP" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-red-500 m-2"
            >
              <FaHtml5 title="HTML5" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-blue-500 m-2"
            >
              <FaCss3Alt title="CSS3" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-yellow-500 m-2"
            >
              <FaJsSquare title="JavaScript" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-blue-400 m-2"
            >
              <FaReact title="React" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-teal-500 m-2"
            >
              <SiTailwindcss title="Tailwind CSS" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-purple-600 m-2"
            >
              <FaBootstrap title="Bootstrap" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-gray-600 m-2"
            >
              <FaGithub title="GitHub" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-blue-600 m-2"
            >
              <SiTypescript title="TypeScript" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-green-600 m-2"
            >
              <FaNodeJs title="Node.js" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-9xl text-pink-600 m-2"
            >
              <SiFigma title="Figma" /> {/* Ícone do Figma */}
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
