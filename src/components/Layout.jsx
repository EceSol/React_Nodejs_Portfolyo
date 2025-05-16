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
    #0d47a1 40%,
    #1565c0 70%,
    #1976d2 100%
  );
  color: white;
  overflow-x: hidden;
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
    #0d47a1 40%,
    #1565c0 70%,
    #1976d2 100%
  );
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Sidebar = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 1024px) {
    width: 300px;
    position: fixed;
    height: calc(100vh - 60px);
    top: 60px;
    left: 0;
    padding: 2rem 1rem;
  }

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
    padding: 1.5rem 1rem;
    margin-top: 60px;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    margin-top: 50px;
  }

  @media (max-height: 668px) {
    padding: 1rem;
  }
`;

const MainContent = styled.div`
  padding: 2rem;
  padding-top: calc(60px + 2rem);

  @media (min-width: 1024px) {
    margin-left: 300px;
    padding: 2rem 3rem;
  }

  @media (max-width: 1023px) {
    margin-left: 0;
    padding: 1.5rem;
    padding-top: calc(60px + 1.5rem);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: calc(50px + 1rem);
  }

  section {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 1rem;
    scroll-margin-top: 60px;
    position: relative;

    @media (min-width: 1024px) {
      padding: 2.5rem 2rem;
    }

    @media (max-width: 1023px) {
      padding: 3rem 1rem;
      scroll-margin-top: 55px;
    }

    @media (max-width: 768px) {
      padding: 2.5rem 0.5rem;
      scroll-margin-top: 50px;
    }

    @media (max-height: 668px) {
      min-height: 60vh; // Daha kısa ekranlarda biraz daha uzun olsun
      padding: 2rem 0.5rem;
    }
  }
`;

const ContentWrapper = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-height: 668px) {
    gap: 1rem;
  }
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <TopNav>
        <Navigation />
      </TopNav>
      <ContentWrapper>
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
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout; 