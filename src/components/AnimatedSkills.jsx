import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';

const AnimationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const AnimationWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(129, 212, 250, 0.3);
    
    &:before {
      opacity: 1;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(129, 212, 250, 0.05) 0%,
      rgba(25, 118, 210, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 15px;
  }
`;

const AnimationTitle = styled.h3`
  color: #81d4fa;
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0.8rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 0.6rem 0;
  }
`;

const AnimationDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  z-index: 1;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`;

const LottieWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const LoadingText = styled.div`
  text-align: center;
  color: #81d4fa;
  font-size: 1.2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 300px;

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1.5rem;
    margin: 1.5rem auto;
  }
`;

const AnimatedSkills = () => {
  const [animations, setAnimations] = useState({
    coding: null,
    react: null,
    mobile: null
  });

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const [codingData, reactData, mobileData] = await Promise.all([
          fetch('https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json').then(r => r.json()),
          fetch('https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json').then(r => r.json()),
          fetch('https://assets10.lottiefiles.com/packages/lf20_pNx6yH.json').then(r => r.json())
        ]);

        setAnimations({
          coding: codingData,
          react: reactData,
          mobile: mobileData
        });
      } catch (error) {
        console.error('Error loading animations:', error);
      }
    };

    loadAnimations();
  }, []);

  if (!animations.coding || !animations.react || !animations.mobile) {
    return <LoadingText>Animasyonlar yükleniyor...</LoadingText>;
  }

  const animationItems = [
    {
      data: animations.coding,
      title: "Yazılım Geliştirme",
      description: "Modern teknolojilerle web ve masaüstü uygulamaları geliştirme"
    },
    {
      data: animations.react,
      title: "Frontend Teknolojileri",
      description: "React ve modern frontend araçlarıyla kullanıcı deneyimi odaklı geliştirme"
    },
    {
      data: animations.mobile,
      title: "Flutter Geliştirme",
      description: "Flutter ile iOS ve Android için çapraz platform mobil uygulamalar"
    }
  ];

  return (
    <AnimationContainer>
      {animationItems.map((item, index) => (
        <AnimationWrapper key={index}>
          <LottieWrapper>
            <Lottie
              animationData={item.data}
              loop={true}
              style={{ width: '100%', height: '100%' }}
            />
          </LottieWrapper>
          <AnimationTitle>{item.title}</AnimationTitle>
          <AnimationDescription>{item.description}</AnimationDescription>
        </AnimationWrapper>
      ))}
    </AnimationContainer>
  );
};

export default AnimatedSkills; 