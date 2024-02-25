import React, { useState } from 'react';
import { Flipper } from "react-flip-toolkit";
import { motion } from 'framer-motion';
import BookListApp from '../assets/img/BookListApp.png'
import CalculadoraCientífica from '../assets/img/Calculadora Científica.png'
import TrabalhadoresDaUltimaHora from '../assets/img/Trabalhadores da Última Hora.png'
import NovoProjetoImg from '../assets/img/Trabalhadores da Última Hora.png'
import { Link } from 'react-router-dom';

const ProjectCard = ({ imageUrl, title, description, link, onCardClick }) => {
  return (
    <Flipper flipKey={link}>
      <motion.div 
        className="relative block overflow-hidden rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => onCardClick(imageUrl)}
        style={{ cursor: 'pointer' }} // Adicionando o cursor pointer aqui
      >
        <img src={imageUrl} alt={title} className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <h2 className="text-white text-lg font-semibold">{title}</h2>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-4 py-2 bg-white bg-opacity-75">
          <p className="text-gray-800 text-sm">{description}</p>
        </div>
      </motion.div>
    </Flipper>
  );
};

const ProjectList = ({ projects, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default function Projetos() {
  const [modalImageUrl, setModalImageUrl] = useState(null);

  const handleCardClick = (imageUrl) => {
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  const projects = [
    {
      imageUrl: BookListApp,
      title: '',
      description: 'This is a description of Book List App.',
      link: 'https://example.com/book-list-app',
    },
    {
      imageUrl: CalculadoraCientífica,
      title: '',
      description: 'This is a description of Calculadora Científica.',
      link: 'https://example.com/calculadora-cientifica',
    },
    {
      imageUrl: TrabalhadoresDaUltimaHora,
      title: '',
      description: 'This is a description of Trabalhadores da Última Hora.',
      link: 'https://example.com/trabalhadores-ultima-hora',
    },
    {
      imageUrl: NovoProjetoImg,
      title: '',
      description: 'This is a description of Novo Projeto.',
      link: 'https://example.com/novo-projeto',
    },
  ];

  return (
    
    <div id="3" className="min-h-screen bg-gradient-to-r from-black via-indigo-900 to-black bg-fixed flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg px-4">
        <h1 className="text-3xl font-bold mt-4 mb-8 text-center text-white">Projetos</h1>
        <div className="mx-auto mb-4">
          <ProjectList projects={projects} onCardClick={handleCardClick} />
        </div>
      </div>
      {modalImageUrl && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="relative max-w-2xl max-h-2xl">
            <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 px-2 py-1 bg-gray-900 text-white rounded">Fechar</button>
            <img src={modalImageUrl} alt="Imagem do Projeto" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
