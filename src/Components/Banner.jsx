import React from 'react';
import styled, { keyframes } from 'styled-components';
import FotoMarcone from '../assets/img/fotor-20240412185333.png';

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
    <div className="mt-24" id="">
      <BannerSection id="sobre-mim">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4 lg:pr-8 flex justify-center items-center">
            <AnimatedContent>
              <div className="text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 text-amber-400 ml-40">Marcone Silva de Brito</h1>
                <p className="text-white ml-40 text-justify text-orange-30 text-2xl">
                 Front-End Developer 
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
