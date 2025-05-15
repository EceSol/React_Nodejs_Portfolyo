import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  line-height: 1.6;
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