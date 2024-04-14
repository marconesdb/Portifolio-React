import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import KarinaCevalles from '../assets/img/KarinaCevalles.png';
import Lacosdeamor from '../assets/img/lacosdeamor-2.png';
import SolarDeJesus from '../assets/img/solardejeus-2.png';
import TrabalhadoresDaUltimaHora from '../assets/img/trabalhadoresdaultimahora.png';
import Avatar2 from '../assets/img/avatar2.png';
import Curriculo from '../assets/img/Currículo  7º Período - Marcone Silva de Brito.pdf';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Site desenvolvido para a Advogada Karina Cevalles',
    imageUrl: KarinaCevalles,
    link: 'https://site-karina-cevalles.vercel.app',
  },
  {
    title: 'Projeto 2',
    description: 'Site desenvolvido para a Associação Laços de Amor',
    imageUrl: Lacosdeamor,
    link: 'https://site-lacosdeamor.vercel.app',
  },
  {
    title: 'Projeto 3',
    description: 'Site criado para a Instituição de Caridade Solar de Jesus.',
    imageUrl: SolarDeJesus,
    link: 'https://www.solardejesus.com.br',
  },
  {
    title: 'Projeto 4',
    description: 'Site da Instituição de Caridade Trabalhadores da Última Hora.',
    imageUrl: TrabalhadoresDaUltimaHora,
    link: 'https://marconesdb.github.io/SiteTrabalhadoresDaUltimaHora',
  },
];

const ProjectCard = ({ title, description, imageUrl, link, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="shadow-xl rounded-lg overflow-hidden border-2 border-gray-300"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 0.5, delay }}
    >
      <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-amber-600 font-semibold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 text-base">{description}</p>
        <a href={link} className="block text-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver mais
        </a>
      </div>
    </motion.div>
  );
};

const App = () => (
  <div id="projetos" className=" mx-auto px-4 py-8 bg-gradient-to-r from-black via-indigo-900 to-black bg-fixed">
    <h1 className="text-3xl font-bold text-center text-amber-400 mt-28">Projetos</h1>
    <div className="flex justify-start mb-8">
      <a href={Curriculo} download="Curriculo.pdf" target="_blank" className=" block bg-blue-500 hover:bg-blue-700 w-32 font-bold py-2 px-4 rounded text-amber-400">Download CV</a>
    </div>
    <div className="flex justify-center mb-8">
      <img className="w-24 h-24" src={Avatar2} alt="Imagem de exemplo" />
      <p className='text-yellow-600 text-justify flex justify-center text-orange-30 text-2xl mb-8 mt-8 mr-8'><em>"Explore meus projetos e entre em contato para colaborações."</em></p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} delay={index * 0.5} />
      ))}
    </div>
  </div>
);

export default App;
