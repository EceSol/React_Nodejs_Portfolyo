import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.5rem);
  width: 100%;
  padding: clamp(1rem, 3vw, 2rem);
`;

const AvatarImage = styled(motion.img)`
  width: clamp(160px, 30vw, 280px);
  height: clamp(200px, 40vw, 350px);
  border-radius: clamp(10px, 2vw, 20px);
  border: 3px solid #4fc3f7;
  box-shadow: 0 0 20px rgba(79, 195, 247, 0.3);
  object-fit: cover;
  
  @media (max-width: 1200px) {
    width: clamp(200px, 25vw, 260px);
    height: clamp(250px, 35vw, 325px);
  }
  
  @media (max-width: 768px) {
    width: clamp(160px, 40vw, 200px);
    height: clamp(200px, 50vw, 250px);
  }

  @media (max-width: 480px) {
    width: clamp(140px, 45vw, 160px);
    height: clamp(175px, 55vw, 200px);
  }
`;

const QuoteBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: clamp(0.8rem, 2vw, 1.5rem);
  border-radius: clamp(10px, 2vw, 15px);
  position: relative;
  max-width: clamp(200px, 50vw, 300px);
  width: 90%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(79, 195, 247, 0.2);
  margin-top: clamp(0.5rem, 1vw, 1rem);

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-left: clamp(8px, 1.5vw, 10px) solid transparent;
    border-right: clamp(8px, 1.5vw, 10px) solid transparent;
    border-bottom: clamp(8px, 1.5vw, 10px) solid rgba(255, 255, 255, 0.05);
  }
`;

const QuoteText = styled(motion.p)`
  color: #81d4fa;
  font-size: clamp(0.8rem, 2vw, 1rem);
  text-align: center;
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: clamp(0.75rem, 3vw, 0.9rem);
  }
`;

const Avatar = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [quote, setQuote] = useState('');

  const quotes = {
    home: "Kodlarla dans etmeyi seven bir yazılımcıyım!  💃",
    about: "Kendimi anlatırken bile bug çıkarmamaya çalışıyorum!  🐛",
    skills: "Yeteneklerim mi?  😅",
    projects: "Her projede bir macera, her bug'da bir ders var! 🚀",
    experience: "20 senede ne yaptıysam 📜",
    contact: "Yoldayız, geliyor musun? 📧"
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setQuote(quotes[currentSection] || quotes.home);
  }, [currentSection]);

  return (
    <AvatarContainer>
      <AvatarImage
        src="/avatar.jpg"
        alt="Ece Sol"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 30px rgba(79, 195, 247, 0.5)",
          transition: { duration: 0.3 }
        }}
      />
      <QuoteBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <QuoteText
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {quote}
        </QuoteText>
      </QuoteBox>
    </AvatarContainer>
  );
};

export default Avatar; 