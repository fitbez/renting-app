// HomePage.js
import React from "react";
import styled from "styled-components";
import HeroCarousel from "../hero-carousel/hero-carousel";

const CtaButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <>
      <HeroCarousel />
    </>
  );
};

export default Home;
