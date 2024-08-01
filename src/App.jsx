import React, { useState } from "react";
import styled from "styled-components";
import BirthdayWish from "./components/BirthdayWish";
import WishSelector from "./components/WishSelector";
import Wishes from "./components/Wishes";
import Header from "./components/Header";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  justify-content: center;
  padding: 20px;
  width:auto
  background: linear-gradient(135deg, #00B2FF, #007BFF);
  min-height: 100vh;
`;

const SurpriseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background: #ff5722;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e64a19;
  }
`;

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleModalOpen = () => {
    if (count !== 0) {
      setIsModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  function handleCount(int) {
    setCount(int);
  }

  return (
    <>
      <Header handleModalOpen={handleModalOpen} count={count} />
      <AppContainer>
        <h1 style={{ color: "black" }}>Hi, Dipan!</h1>
        <h2> Is there something Special Today??🤔</h2>
        <SurpriseButton onClick={handleButtonClick}>
          Let's Find Out!!!💡
        </SurpriseButton>
        <BirthdayWish
          isVisible={isVisible}
          name="Your Boss's Name"
          message="Wishing you a fantastic day filled with joy and success!"
        />

        {isVisible && (
          <>
            <h2 style={{ color: "magenta", marginTop: "100px" }}>
              Your Loved Ones are Wishing You :):)
            </h2>
            <Wishes />
            <WishSelector
              isModalVisible={isModalVisible}
              handleModalClose={handleModalClose}
              onClick={handleCount}
            />
          </>
        )}
      </AppContainer>
    </>
  );
};

export default App;
