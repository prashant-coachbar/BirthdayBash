// src/components/Modal.js
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  z-index: 1000;
  overflow: auto;
`;

const ModalContainer = styled.div`
  position: relative;
  margin: 5% auto;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FF5722;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #E64A19;
  }
`;

const ModalTitle = styled.h3`
  color: #007BFF;
`;

const ModalList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ModalItem = styled.li`
  padding: 10px;
  background: #F1F1F1;
  margin: 10px 0;
  border-radius: 5px;
`;

const Modal = ({ isVisible, onClose, selectedWishes }) => {
  return (
    <Overlay isVisible={isVisible}>
      <ModalContainer>
              <CloseButton onClick={onClose}>Close</CloseButton>
        <ModalTitle>May All these WISHES Come true!!!</ModalTitle>
        <ModalList>
          {selectedWishes.map((wish, index) => (
            <ModalItem key={index}>{wish}</ModalItem>
          ))}
        </ModalList>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
