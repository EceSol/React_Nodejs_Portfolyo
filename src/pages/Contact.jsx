import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import { FaGithub, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem 0;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #4fc3f7;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SocialLink = styled.a`
  color: #4fc3f7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #29b6f6;
    transform: translateY(-2px);
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
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> Twitter
        </SocialLink>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </SocialLink>
        <SocialLink href="mailto:contact@example.com">
          <FaEnvelope /> E-posta
        </SocialLink>
      </SocialLinks>

      <ContactForm />
    </ContactContainer>
  );
};

export default Contact; 