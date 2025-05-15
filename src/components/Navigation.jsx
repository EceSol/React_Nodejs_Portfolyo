import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 2rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #4fc3f7;
  margin-right: 3rem;
  cursor: pointer;
  transition: color 0.3s ease;
  min-width: 100px;

  &:hover {
    color: #81d4fa;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: auto;
  padding-right: 2rem;
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
`;

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Nav>
      <Logo onClick={() => scrollToSection('home')}>ES</Logo>
      <NavItems>
        <NavItem onClick={() => scrollToSection('about')}>Ben Kimim?</NavItem>
        <NavItem onClick={() => scrollToSection('projects')}>Projeler</NavItem>
        <NavItem onClick={() => scrollToSection('experience')}>Deneyim</NavItem>
        <NavItem onClick={() => scrollToSection('contact')}>İletişim</NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navigation; 