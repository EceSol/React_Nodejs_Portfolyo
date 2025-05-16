import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  width: 100%;
  padding: 0 2rem;
  min-height: 100vh;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <HomeContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: false }}
    >
      <Title
        variants={itemVariants}
      >
        Merhaba, Ben Ece Sol
      </Title>
      <Subtitle
        variants={itemVariants}
      >
        Evet, soldaki benim. Sizlerle bir yola çıkmak için burdayım.
        Yazılım geliştirme tutkusu ile hareket eden, yenilikçi çözümler üreten
        bir geliştiriciyim.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home; 