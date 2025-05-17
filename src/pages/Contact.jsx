import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaEye } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialSection = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(79, 195, 247, 0.2);
  backdrop-filter: blur(10px);

  @media (max-width: 968px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

const Text = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinksContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: #81d4fa;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: rgba(129, 212, 250, 0.1);
  border: 1px solid rgba(129, 212, 250, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  svg {
    font-size: 1.3em;
  }

  &:hover {
    background: rgba(129, 212, 250, 0.15);
    border-color: rgba(129, 212, 250, 0.4);
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
`;

const FormSection = styled(motion.div)`
  flex: 2;
`;

const ResumeSection = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

const ResumeButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.$primary ? '#4fc3f7' : 'rgba(79, 195, 247, 0.1)'};
  color: ${props => props.$primary ? '#fff' : '#81d4fa'};
  border: 1px solid ${props => props.$primary ? 'transparent' : 'rgba(129, 212, 250, 0.3)'};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$primary ? '#03a9f4' : 'rgba(79, 195, 247, 0.2)'};
    border-color: ${props => props.$primary ? 'transparent' : 'rgba(129, 212, 250, 0.5)'};
    box-shadow: 0 5px 15px rgba(3, 169, 244, 0.2);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 0.7rem 1.2rem;
  }
`;

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
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
      <ContentWrapper>
        <SocialSection variants={itemVariants}>
          <Text>
            Benimle iletişime geçmek, projeler hakkında konuşmak veya işbirliği yapmak
            isterseniz aşağıdaki kanallardan ulaşabilirsiniz.
          </Text>
          <SocialLinksContainer>
            <SocialLink
              href="mailto:cengecesol@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> E-posta
            </SocialLink>
            <SocialLink
              href="https://github.com/EceSol"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ece-sol-09876829a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin /> LinkedIn
            </SocialLink>
          </SocialLinksContainer>

          <ResumeSection variants={itemVariants}>
            <ResumeButton
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              $primary
              as={motion.a}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileDownload /> CV İndir
            </ResumeButton>
            <ResumeButton
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEye /> Online CV
            </ResumeButton>
          </ResumeSection>
        </SocialSection>
        <FormSection variants={itemVariants}>
          <ContactForm />
        </FormSection>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 