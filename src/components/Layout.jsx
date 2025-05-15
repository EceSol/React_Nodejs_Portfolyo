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
  display: flex;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    #1a237e 50%,
    #4fc3f7 100%
  );
  color: white;
`;

const Sidebar = styled.div`
  width: 300px;
  padding: 2rem;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 300px;
  padding: 2rem;
`;

const TopNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 300px);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  margin-top: 80px;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Sidebar>
        <Avatar />
      </Sidebar>
      <MainContent>
        <TopNav>
          <Navigation />
        </TopNav>
        <ContentWrapper>
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
        </ContentWrapper>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout; 