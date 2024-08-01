// src/components/Header.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.webp";

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

export default function Header({ handleModalOpen,count }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="main-header" className={isScrolled ? 'scrolled' : ''}>
      <div id="title">
        <img src={logo} alt="" />
        <h1>Birthday Bash</h1>
      </div>
      <div id='middletitle'>
        <h2>SPREADING JOYS🎂🎉</h2>
      </div>
      <SelectedWishesButton onClick={handleModalOpen}>
        My Wishes ({count})
      </SelectedWishesButton>
    </section>
  );
}
