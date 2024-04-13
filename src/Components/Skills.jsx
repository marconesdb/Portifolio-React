import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si'; 

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
    <div id="skills" className='bg-amber-500 h-screen'>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 20 }}
          className="p-8 ml-8 mr-8"
        >
          <h2 className="text-3xl font-bold text-center text-black mt-32 mb-40 ">Skills</h2>
          <div className="flex flex-wrap justify-center">
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-red-500"
            >
              <FaHtml5 title="HTML5" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-blue-500"
            >
              <FaCss3Alt title="CSS3" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-yellow-500"
            >
              <FaJsSquare title="JavaScript" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-blue-400"
            >
              <FaReact title="React" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-teal-500"
            >
              <SiTailwindcss title="Tailwind CSS" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-purple-600"
            >
              <FaBootstrap title="Bootstrap" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-gray-600"
            >
              <FaGithub title="GitHub" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-blue-600"
            >
              <SiTypescript title="TypeScript" />
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.9 }}
              className="text-9xl m-2 text-green-600"
            >
              <FaNodeJs title="Node.js" />
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
