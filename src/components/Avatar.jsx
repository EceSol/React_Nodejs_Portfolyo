import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
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