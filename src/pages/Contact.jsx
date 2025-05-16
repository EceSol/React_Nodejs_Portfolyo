import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #81d4fa;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Text = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SocialLink = styled(motion.a)`
  color: #81d4fa;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(79, 195, 247, 0.2);

  &:hover {
    color: #b3e5fc;
    transform: translateY(-2px);
    background: rgba(129, 212, 250, 0.15);
  }

  svg {
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Contact = () => {
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
    <ContactContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: false }}
    >
      <Title variants={itemVariants}>
        İletişime Geç
      </Title>
      <Text variants={itemVariants}>
        Benimle iletişime geçmek, projeler hakkında konuşmak veya işbirliği yapmak
        isterseniz aşağıdaki form veya sosyal medya hesaplarım üzerinden
        ulaşabilirsiniz.
      </Text>
      <SocialLinks variants={containerVariants}>
        <SocialLink
          href="mailto:your.email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope /> E-posta
        </SocialLink>
        <SocialLink
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub /> GitHub
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin /> LinkedIn
        </SocialLink>
      </SocialLinks>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact; 