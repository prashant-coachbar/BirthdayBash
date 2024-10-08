// src/components/WishSelector.js
import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const wishes = [
  "Launch AppVentory successfully.",
  "Achieve a WORK-WORK balance.",
  "Experience a thrilling adventure.",
  "Reconnect with an old friend.",
  "Read a book that inspires and educates.",
  "Enjoy a memorable family vacation.",
  "Visit a new country or city.",
  "Mentor a new employee to success.",
  "Make time for self-care and relaxation.",
  "Secure a big client or partnership.",
  "Cook or bake a new recipe.",
  "Earn a prestigious award or honor.",
  "Spend quality time with loved ones.",
  "Boost team morale with a successful team-building event.",
  "Exceed quarterly targets and goals.",
  "Reach a personal fitness goal.",
  "Dedicate more time to a favorite hobby.",
  "Improve personal health and wellness.",
  "Start a personal blog or journal.",
  "Practice mindfulness or meditation.",
  "Organize a family reunion or get-together.",
  "Implement a new process that boosts productivity.",
  "Learn a new language.",
  "Renovate or redecorate a part of the home.",
  "Achieve a financial goal, such as saving or investing.",
];

const WishContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
const WishDemoContainer = styled.div`
  height: 400px
`;

const WishItem = styled.div`
  flex: 1 0 45%;
  margin: 10px;
  padding: 10px;
  background: ${(props) => (props.iselected ? "#009688" : "#FFFFFF")};
  color: ${(props) => (props.iselected ? "#FFFFFF" : "#333")};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background: #00b2ff;
    color: #ffffff;
  }
`;
const SelectedWishesButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #FFFFFF;
  background: #FF5722;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #E64A19;
  }
`;

const WishSelector = ({ isModalVisible, handleModalClose, onClick }) => {
  const [selectedWishes, setSelectedWishes] = useState([]);
  const [show, setShow] = useState(false);
  onClick(selectedWishes.length);

  const handleWishClick = (wish) => {
    if (!selectedWishes.includes(wish) && selectedWishes.length === 12) {
      alert("Heyy!!! Only 12");
    }
    setSelectedWishes((prevWishes) =>
      prevWishes.includes(wish)
        ? prevWishes.filter((w) => w !== wish)
        : prevWishes.length < 12
        ? [...prevWishes, wish]
        : prevWishes
    );
  };
  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <h2 style={{ color: "magenta", marginTop: "50px" }}>
        Here's the Your GENIE, make a wish of what you want?
      </h2>
      <p></p>
      <SelectedWishesButton onClick={handleClick}>Let's Make a wish</SelectedWishesButton>
      {!show && <WishDemoContainer/>}
      {show && (
        <>
  
          <h2>
            Please Go Ahead and Select 12 of them for a Fantastic Year Ahead
          </h2>
          <WishContainer>
            {wishes.map((wish, index) => (
              <WishItem
                key={index}
                iselected={selectedWishes.includes(wish)}
                onClick={() => handleWishClick(wish)}
              >
                {wish}
              </WishItem>
            ))}
          </WishContainer>
        </>
      )}
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        selectedWishes={selectedWishes}
      />
    </div>
  );
};

export default WishSelector;
