import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #81d4fa;
  margin-right: 3rem;
  cursor: pointer;
  transition: color 0.3s ease;
  min-width: 50px;

  &:hover {
    color: #b3e5fc;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-right: 1rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: auto;
  padding-right: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, 
      #000000 0%,
      #0d47a1 40%,
      #1565c0 70%,
      #1976d2 100%
    );
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
`;

const NavItem = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;

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
    width: 100%;
    text-align: center;
    padding: 1rem;
    
    &:hover {
      background: rgba(129, 212, 250, 0.15);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #81d4fa;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <Nav>
      <Logo onClick={() => scrollToSection('home')}>ES</Logo>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </MenuButton>
      <NavItems isOpen={isMenuOpen}>
        <NavItem onClick={() => scrollToSection('about')}>Ben Kimim?</NavItem>
        <NavItem onClick={() => scrollToSection('skills')}>Yeteneklerim</NavItem>
        <NavItem onClick={() => scrollToSection('projects')}>Projeler</NavItem>
        <NavItem onClick={() => scrollToSection('experience')}>Deneyim</NavItem>
        <NavItem onClick={() => scrollToSection('contact')}>İletişim</NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navigation;