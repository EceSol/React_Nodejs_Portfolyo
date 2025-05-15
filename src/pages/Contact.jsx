import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import { FaGithub, FaTwitter, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #81d4fa;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SocialLink = styled.a`
  color: #81d4fa;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem;
    background: rgba(129, 212, 250, 0.1);
  }

  &:hover {
    color: #b3e5fc;
    transform: translateY(-2px);
    background: rgba(129, 212, 250, 0.15);
  }

  svg {
    font-size: 1.2em;

    @media (max-width: 480px) {
      font-size: 1.4em;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>İletişim</Title>
      <Text>
        Benimle iletişime geçmek, projeler hakkında konuşmak veya işbirliği yapmak
        isterseniz aşağıdaki form veya sosyal medya hesaplarım üzerinden
        ulaşabilirsiniz.
      </Text>

      <SocialLinks>
        <SocialLink href="https://github.com/EceSol" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/ece-sol-09876829a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </SocialLink>
        <SocialLink href="mailto:cengecesol@gmail.com">
          <FaEnvelope /> E-posta
        </SocialLink>
      </SocialLinks>

      <ContactForm />
    </ContactContainer>
  );
};

export default Contact; 