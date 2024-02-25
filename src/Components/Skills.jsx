import React from 'react';
import { motion } from 'framer-motion'; // Importe o motion do framer-motion
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si'; // Adicionando o ícone do Tailwind CSS
// import CustomTailwindIcon from './CustomTailwindIcon'; // Importe o ícone personalizado para Tailwind CSS

export default function Skills() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 8.5 }}
        className="border border-gray-300 p-8 mt-8 mb-8 ml-8 mr-8"
      >
        <h2 className="text-2xl mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {/* Utilize o componente motion para adicionar animações */}
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-red-500"
          >
            <FaHtml5 title="HTML5" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-blue-500"
          >
            <FaCss3Alt title="CSS3" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-yellow-500"
          >
            <FaJsSquare title="JavaScript" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-blue-400"
          >
            <FaReact title="React" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-teal-500" // Alteração aqui para incluir a cor do Tailwind CSS
          >
            <SiTailwindcss title="Tailwind CSS" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-purple-600"
          >
            <FaBootstrap title="Bootstrap" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-gray-600"
          >
            <FaGithub title="GitHub" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-blue-600"
          >
            <SiTypescript title="TypeScript" />
          </motion.div>
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-5xl m-2 text-green-600"
          >
            <FaNodeJs title="Node.js" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
