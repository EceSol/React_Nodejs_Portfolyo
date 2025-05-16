import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const AvatarImage = styled(motion.img)`
  width: 280px;
  height: 350px;
  border-radius: 20px;
  border: 3px solid #4fc3f7;
  box-shadow: 0 0 20px rgba(79, 195, 247, 0.3);
  object-fit: cover;
  
  @media (max-width: 1024px) {
    width: 240px;
    height: 300px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 200px;
  }
`;

const QuoteBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 15px;
  position: relative;
  max-width: 250px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(79, 195, 247, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(255, 255, 255, 0.05);
  }
`;

const QuoteText = styled(motion.p)`
  color: #81d4fa;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  line-height: 1.4;
`;

const Avatar = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [quote, setQuote] = useState('');

  const quotes = {
    home: "Merhaba! Ben Ece. Kodlarla dans etmeyi seven bir yazılımcıyım! 💃",
    about: "Kendimi anlatırken bile bug çıkarmamaya çalışıyorum! 🐛",
    skills: "Yeteneklerim mi? Stack Overflow'u ezbere biliyorum! 😅",
    projects: "Her projede bir macera, her bug'da bir ders var! 🚀",
    experience: "Tecrübelerim CV'me sığmıyor, scroll'u aşağı çekin! 📜",
    contact: "Mail kutum her zaman açık, spam değilseniz tabii ki! 📧"
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