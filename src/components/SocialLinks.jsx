import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialContainer = styled.div`
  margin-top: auto;
  padding: 1rem 0;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4fc3f7;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://github.com/EceSol" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialLinks; 