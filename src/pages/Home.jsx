import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  width: 100%;
  padding: 0 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0 1rem;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Merhaba, Ben Ece Sol</Title>
      <Subtitle>
        Yazılım geliştirme tutkusu ile hareket eden, yenilikçi çözümler üreten
        bir geliştiriciyim. Python ve web teknolojileri konusunda deneyimliyim.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home; 