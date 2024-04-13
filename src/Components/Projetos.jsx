import React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { motion } from 'framer-motion';
import karinaCevalles from '../assets/img/KarinaCevalles.png';
import lacosdeamor from '../assets/img/lacosdeamor-2.png';
import TrabalhadoresDaUltimaHora from '../assets/img/trabalhadoresdaultimahora.png';
import solardejesus from '../assets/img/solardejeus-2.png';
import Avatar from '../assets/img/avatar2.png';
import downloadPDF from '../assets/img/Doc1.pdf';
import '../Components/Projetos/Projetos.css'; // Adicionei a importação do arquivo CSS
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ imageUrl, title, description, link, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleCardClick = (event) => {
    if (event.target.tagName !== 'A') {
      window.open(link, '_blank');
    }
  };

  return (
    <Flipper flipKey={link}>
      <Flipped flipId={`project-${link}`}>
        <motion.div
          ref={ref}
          className="relative block overflow-hidden rounded-lg  project-card border-2 border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: index * 0.9 }}
          onClick={handleCardClick}
          
        >
          <img src={imageUrl} alt={title} className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <h2 className="text-white text-lg font-semibold">{title}</h2>
          </div>
          <div className="absolute inset-x-0 bottom-0 px-4 py-2 bg-white bg-opacity-75">
            <p className="text-gray-800 text-sm">{description}</p>
          </div>
        </motion.div>
      </Flipped>
    </Flipper>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <div id="" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4 ">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
};

export default function Projetos() {
  const projects = [
    {
      imageUrl: karinaCevalles,
      title: '',
      description: 'Site desenvolvido para a Advogada karina Cevalles.',
      link: 'https://github.com/marconesdb/site-karinaCevalles',
    },
    {
      imageUrl: lacosdeamor,
      title: '',
      description: 'Site da Instituição Filantrópica Laços de Amor',
      link: 'https://github.com/marconesdb/site-lacosdeamor',
    },
    {
      imageUrl: TrabalhadoresDaUltimaHora,
      title: '',
      description: 'Site da Instituição de Caridade Trabalhadores da Última Hora.',
      link: 'https://github.com/marconesdb/SiteTrabalhadoresDaUltimaHora',
    },
    {
      imageUrl: solardejesus,
      title: '',
      description: 'Site da Instituição Religiosa Solar de Jesus',
      link: 'https://github.com/marconesdb/solarDeJesus-React',
    },
  ];

  return (
    <div id="projetos" className="p-24 bg-gradient-to-r from-black via-indigo-900 to-black bg-fixed flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg px-4">
        <h1 className="text-3xl font-bold mt-4 mb-8 text-center text-amber-400">Projetos</h1>
        <a href={downloadPDF} download="Example-PDF-document" target="_blank" className="block bg-blue-500 hover:bg-blue-700 w-32 font-bold py-2 px-4 rounded text-amber-400">
          Download CV
        </a>

        <div className="flex justify-center">
          <img className="w-36 h-36 rounded-xl" src={Avatar} alt="" />
        </div>
        <div className="mx-auto mb-4">
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
}
