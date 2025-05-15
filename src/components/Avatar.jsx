import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AvatarImage = styled.img`
  width: 280px;
  height: 350px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #4fc3f7;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  }
`;

const BrandName = styled.h1`
  font-size: 2.5rem;
  margin: 1rem 0;
  color: #4fc3f7;
  text-align: center;
`;

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImage src="/avatar.jpg" alt="ES" />
      <BrandName>ES</BrandName>
    </AvatarContainer>
  );
};

export default Avatar; 