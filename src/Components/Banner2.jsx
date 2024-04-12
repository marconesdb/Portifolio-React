import React, { useState, useEffect } from 'react';

const Banner2 = () => {
  const [text, setText] = useState('');
  const fullText = `Olá! Sou um entusiasta de tecnologia e estudante do curso de Sistemas de Informação. Minha jornada profissional começou como técnico de operações na BBTS, onde ganhei valiosa experiência na infraestrutura de TI. Atualmente, além da faculdade, faço cursos extracurriculares, buscando aprimorar constantemente meu conhecimento e habilidades. Com uma paixão pelo Front-End, mergulhei em estudos avançados, obtendo diversas certificações, incluindo aquelas que atestam minha proficiência em HTML, CSS e JavaScript. Vamos criar algo incrível juntos!`;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [index, fullText]);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900" id="banner2">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-full md:pr-4 lg:pr-8 flex justify-center items-center">
          <div className="text-white text-justify text-xl md:ml-56 ml-4 mr-4">
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
