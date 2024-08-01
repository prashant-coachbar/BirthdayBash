import React from 'react';
import styled, { keyframes } from 'styled-components';
import photo from "../assets/photo.png"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const WishContainer = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  text-align: center;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 10px;
  margin-top:20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Avatar = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: fill;
`;

const Message = styled.h1`
  color: #007BFF;
`;

const BirthdayWish = ({ isVisible, name, message }) => (
  <WishContainer isVisible={isVisible}>
    <Avatar src={photo} alt={`${name}'s Avatar`} />
    <Message>{message}</Message>
  </WishContainer>
);

export default BirthdayWish;
