import React from 'react';
import Avatar from './Avatar';
import Navigation from './Navigation';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    #1a237e 50%,
    #4fc3f7 100%
  );
  color: white;
`;

const TopNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(
    to right,
    #000000 0%,
    #1a237e 70%,
    #0d47a1 100%
  );
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Sidebar = styled.div`
  width: 300px;
  padding: 2rem;
  position: fixed;
  height: calc(100vh - 60px);
  top: 120px;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  margin-left: 300px;
  padding: 2rem;
  padding-top: calc(60px + 2rem);

  section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <TopNav>
        <Navigation />
      </TopNav>
      <Sidebar>
        <Avatar />
      </Sidebar>
      <MainContent>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout; 