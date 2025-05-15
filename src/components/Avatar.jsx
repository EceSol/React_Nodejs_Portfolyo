import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const AvatarImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url('/avatar-placeholder.jpg');
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
  border: 3px solid #4fc3f7;
`;

const BrandName = styled.h1`
  font-size: 2.5rem;
  margin: 1rem 0;
  color: #4fc3f7;
`;

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImage />
      <BrandName>ES</BrandName>
    </AvatarContainer>
  );
};

export default Avatar; 