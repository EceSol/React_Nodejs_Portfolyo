import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(13, 71, 161, 0.95) 40%,
    rgba(21, 101, 192, 0.95) 70%,
    rgba(25, 118, 210, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(129, 212, 250, 0.2);
  text-align: center;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
`;

const Attribution = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin: 0.5rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

const Heart = styled(motion.span)`
  color: #ff4081;
  display: inline-block;
`;

const Link = styled.a`
  color: #81d4fa;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4fc3f7;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Copyright>
        © {currentYear} Ece Sol. Tüm hakları saklıdır.
      </Copyright>
      <Attribution>
        Made with <Heart
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >❤</Heart> by <Link href="https://github.com/EceSol" target="_blank" rel="noopener noreferrer">EceSol</Link>
      </Attribution>
    </FooterContainer>
  );
};

export default Footer; 