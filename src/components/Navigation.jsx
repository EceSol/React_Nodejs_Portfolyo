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
  color: #4fc3f7;
  margin-right: 3rem;
  cursor: pointer;
  transition: color 0.3s ease;
  min-width: 50px;

  &:hover {
    color: #81d4fa;
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
    background: linear-gradient(to bottom, #000000, #1a237e);
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: rgba(79, 195, 247, 0.1);
    color: #4fc3f7;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #4fc3f7;
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
        <NavItem onClick={() => scrollToSection('projects')}>Projeler</NavItem>
        <NavItem onClick={() => scrollToSection('experience')}>Deneyim</NavItem>
        <NavItem onClick={() => scrollToSection('contact')}>İletişim</NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navigation; 