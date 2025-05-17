import React, { memo } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import codingAnimation from '../assets/animations/coding-animation.json';
import frontendAnimation from '../assets/animations/frontend-animation.json';
import mobileAnimation from '../assets/animations/mobile-animation.json';

const AnimationContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const AnimationWrapper = styled(motion.div)`
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  will-change: transform;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(129, 212, 250, 0.3);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 15px;
  }
`;

const LottieWrapper = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
  will-change: transform;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const AnimationTitle = styled(motion.h3)`
  color: #81d4fa;
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
  z-index: 1;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0.8rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 0.6rem 0;
  }
`;

const AnimationDescription = styled(motion.p)`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  z-index: 1;
  line-height: 1.5;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`;

const animationItems = [
  {
    data: codingAnimation,
    title: "Yazılım Geliştirme",
    description: "Modern teknolojilerle web ve masaüstü uygulamaları geliştirme"
  },
  {
    data: frontendAnimation,
    title: "Frontend Teknolojileri",
    description: "React ve modern frontend araçlarıyla kullanıcı deneyimi odaklı geliştirme"
  },
  {
    data: mobileAnimation,
    title: "Flutter Geliştirme",
    description: "Flutter ile iOS ve Android için çapraz platform mobil uygulamalar"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    progressiveLoad: true
  }
};

const AnimationCard = memo(({ data, title, description }) => (
  <AnimationWrapper variants={itemVariants}>
    <LottieWrapper>
      <Lottie
        animationData={data}
        {...lottieOptions}
        style={{ width: '100%', height: '100%' }}
      />
    </LottieWrapper>
    <AnimationTitle>{title}</AnimationTitle>
    <AnimationDescription>{description}</AnimationDescription>
  </AnimationWrapper>
));

const AnimatedSkills = () => {
  return (
    <AnimationContainer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {animationItems.map((item, index) => (
        <AnimationCard
          key={index}
          data={item.data}
          title={item.title}
          description={item.description}
        />
      ))}
    </AnimationContainer>
  );
};

export default memo(AnimatedSkills); 