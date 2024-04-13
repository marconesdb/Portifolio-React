import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Banner2 = () => {
  const [text, setText] = useState('');
  const fullText = `"Olá! Sou um entusiasta de tecnologia com uma sólida formação acadêmica e experiência prática. Possuo Pós-Graduação em Big Data e Ciência de Dados, Machine Learning e Inteligência Artificial, além de um Aperfeiçoamento em Tecnologias Digitais Aplicadas à Educação. Atualmente, estou ampliando meus conhecimentos como estudante do Curso Técnico de Informática e Sistemas de Informação.
  
  Com uma considerável experiência em manutenção de computadores, estou constantemente buscando aprimorar minhas habilidades através de cursos extracurriculares. Minha paixão pelo Front-End me levou a obter diversas certificações em HTML, CSS e JavaScript, através de estudos avançados e práticos.
  
  Estou entusiasmado para colaborar e criar algo incrível juntos!"`;
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // O componente é considerado visível quando 50% dele está na tela
    triggerOnce: true, // Dispara apenas uma vez quando o componente se torna visível
  });
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [index, fullText, isVisible]);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900" id="sobre">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-full md:pr-4 lg:pr-8 flex justify-center items-center">
          <div className="text-white text-justify text-xl md:ml-56 ml-4 mr-4 mt-36  mb-36" ref={ref}>
            <h3 className=" font-bold mb-4 text-3xl text-amber-400 ">Sobre mim</h3>
            {text}
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          {/* Adicione a imagem do banner aqui, se necessário */}
          {/* <BannerImage src={suaImagem} alt="Descrição da imagem" className="rounded-xl" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
