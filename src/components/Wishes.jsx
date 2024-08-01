import React from "react";
import styled from "styled-components";

const wishes = [
  {
    name: "Elena Piskova",
    message:
      "Dipan happy birthday!  Wishing you a fantastic year ahead filled with joy, success, and the fulfillment of all your dreams and goals. Enjoy your special day!",
  },
  {
    name: "Indrajit",
    message: "Happy Birthday Dipan!!! I wish you achieve your dreams!!!!",
  },
  {
    name: "Krishna Jani",
    message: "Happy Birthday Dipan! have a wonderful day and year ahead.🎊🎊",
  },
  {
    name: "Rob",
    message:
      "Happy Birthday Dipan Gajjar! Hope you are having a great day and cracking fun year ahead:):)",
  },
  {
    name: "Akshay Tukadiya",
    message: "Happy Birthday Dipan Gajjar 🎉🎂",
  },
  {
    name: "Shawn Fernando",
    message: "Many more happy returns of the day! I hope you have a good one!",
  },
  {
    name: "Bijal",
    message: "Wish you a very happy birthday Dipan Gajjar. Many many more to come! Have a splendid day!🎂 ",
  },
  {
    name: "Roshni",
    message: "Happy Birthday, Dipan Gajjar! Wishing you a day packed with joy, laughter, and all your favorite things. May this special day bring you happiness and set the stage for an incredible year ahead. Enjoy every moment and celebrate to the fullest!!",
  },
  // Add more wishes as needed
];

const WishList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  margin: 20px auto;
  background: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const WishItem = styled.li`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  background: ${(props) => (props.isHovered ? "#E0F7FA" : "#FFFFFF")};
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: ${(props) => (props.isHovered ? "scale(1.02)" : "scale(1)")};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #e0f7fa;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const WishMessage = styled.h4`
  margin: 0;
  color: #007bff;
`;

const WishAuthor = styled.cite`
  display: block;
  margin-top: 10px;
  color: #009688;
  font-style: normal;
  text-align: right;
`;

export default function Wishes() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <WishList>
      {wishes.map((wish, index) => (
        <WishItem
          key={index}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <WishMessage>{wish.message}</WishMessage>
          <WishAuthor>- {wish.name}</WishAuthor>
        </WishItem>
      ))}
    </WishList>
  );
}
