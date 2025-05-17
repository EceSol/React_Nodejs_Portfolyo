import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(to right, 
    #000000 0%,
    #0d47a1 40%,
    #1565c0 70%,
    #1976d2 100%
  );
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 50px;
  }
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: #81d4fa;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavItems = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      #000000 0%,
      #0d47a1 40%,
      #1565c0 70%,
      #1976d2 100%
    );
    padding-top: 70px;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;
  }
`;

const NavItem = styled(motion.a)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(
      to right,
      #81d4fa 0%,
      #b3e5fc 100%
    );
    transition: width 0.3s ease;
  }

  &:hover {
    background: rgba(129, 212, 250, 0.1);
    color: #b3e5fc;

    &:before {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    width: 80%;
    text-align: center;
    
    &:hover {
      background: rgba(129, 212, 250, 0.15);
    }
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #81d4fa;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
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
      y: 0
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 60; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <Nav>
      <Logo
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ES
      </Logo>
      <MenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? '✕' : '☰'}
      </MenuButton>
      <AnimatePresence>
        {(isMenuOpen || window.innerWidth > 768) && (
          <NavItems
            $isOpen={isMenuOpen}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavItem
              variants={itemVariants}
              onClick={() => scrollToSection('about')}
              style={{
                color: activeSection === 'about' ? '#b3e5fc' : undefined,
                background: activeSection === 'about' ? 'rgba(129, 212, 250, 0.1)' : undefined
              }}
            >
              Ben Kimim?
            </NavItem>
            <NavItem
              variants={itemVariants}
              onClick={() => scrollToSection('skills')}
              style={{
                color: activeSection === 'skills' ? '#b3e5fc' : undefined,
                background: activeSection === 'skills' ? 'rgba(129, 212, 250, 0.1)' : undefined
              }}
            >
              Yeteneklerim
            </NavItem>
            <NavItem
              variants={itemVariants}
              onClick={() => scrollToSection('projects')}
              style={{
                color: activeSection === 'projects' ? '#b3e5fc' : undefined,
                background: activeSection === 'projects' ? 'rgba(129, 212, 250, 0.1)' : undefined
              }}
            >
              Projeler
            </NavItem>
            <NavItem
              variants={itemVariants}
              onClick={() => scrollToSection('experience')}
              style={{
                color: activeSection === 'experience' ? '#b3e5fc' : undefined,
                background: activeSection === 'experience' ? 'rgba(129, 212, 250, 0.1)' : undefined
              }}
            >
              Deneyim
            </NavItem>
            <NavItem
              variants={itemVariants}
              onClick={() => scrollToSection('contact')}
              style={{
                color: activeSection === 'contact' ? '#b3e5fc' : undefined,
                background: activeSection === 'contact' ? 'rgba(129, 212, 250, 0.1)' : undefined
              }}
            >
              İletişim
            </NavItem>
          </NavItems>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navigation;