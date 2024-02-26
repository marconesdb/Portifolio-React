import React from 'react';
import styled, { keyframes } from 'styled-components';
import FotoMarcone from '../assets/img/fotor-202401108231.png';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: .5;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1.5;
  }
  100% {
    opacity: 0.1;
  }
`;

const BannerSection = styled.section`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2rem;
  }
  background: linear-gradient(to right, black, #6f42c1, black);
  position: relative;
  overflow: hidden;
`;

const AnimatedContent = styled.div`
  animation: ${fadeIn} 10s ease-in-out;
`;

const AnimatedGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, black, #6f42c1, gray);
  opacity: 0;
  animation: ${gradientFadeIn} 3s ease-in-out;
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Banner = () => {
  return (
    <div className="mt-24">
      <BannerSection id="sobre-mim">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4 lg:pr-8 flex justify-center items-center">
            <AnimatedContent>
              <div className="text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 text-white ml-40">Marcone Silva de Brito</h1>
                <p className="text-white ml-40 text-justify">
                  Olá! Sou um entusiasta de tecnologia e estudante do curso de Sistemas de Informação. Minha jornada profissional começou como técnico de operações na BBTS, onde ganhei valiosa experiência na infraestrutura de TI. Atualmente, além da faculdade faço cursos extracurriculares, buscando aprimorar constantemente meu conhecimento e habilidades. Com uma paixão pelo Front-End, mergulhei de cabeça em estudos avançados, obtendo diversas certificações, incluindo aquelas que atestam minha proficiência em HTML, CSS e Javascript. Vamos criar algo incrível juntos!
                </p>
              </div>
            </AnimatedContent>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
            <AnimatedContent>
              <BannerImage
                src={FotoMarcone}
                alt="Descrição da imagem"
                className="rounded-xl"
              />
            </AnimatedContent>
          </div>
        </div>
        <AnimatedGradient />
      </BannerSection>
    </div>
  );
};

export default Banner;
