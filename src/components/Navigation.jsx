import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(79, 195, 247, 0.2);
    color: #4fc3f7;
  }

  &.active {
    background: rgba(79, 195, 247, 0.3);
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
      <NavItem onClick={() => scrollToSection('home')}>Ana Sayfa</NavItem>
      <NavItem onClick={() => scrollToSection('about')}>Ben Kimim?</NavItem>
      <NavItem onClick={() => scrollToSection('projects')}>Projeler</NavItem>
      <NavItem onClick={() => scrollToSection('experience')}>Deneyim</NavItem>
      <NavItem onClick={() => scrollToSection('contact')}>İletişim</NavItem>
    </Nav>
  );
};

export default Navigation; 