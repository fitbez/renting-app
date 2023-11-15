import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import LoginModal from "../login/login";

const HeroCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 400px;
  margin: 0 auto;
`;

const SlideImageWrapper = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 1;
`;

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

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeroCarouselContainer>
      <Slider {...settings}>
        <div>
          <SlideImageWrapper>
            <img
              src="https://images.unsplash.com/photo-1495202337139-e865ed70fcd4"
              alt="Slide 1"
            />
          </SlideImageWrapper>
        </div>
        <div>
          <SlideImageWrapper>
            <img
              src="https://images.unsplash.com/photo-1518355077561-4af7abce973d"
              alt="Slide 1"
            />
          </SlideImageWrapper>
        </div>
        <div>
          <SlideImageWrapper>
            <img
              src="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05"
              alt="Slide 1"
            />
          </SlideImageWrapper>
        </div>
        {/* Add more slides with SlideImageWrapper */}
      </Slider>
      <OverlayContent>
        <h1 style={{ color: "#333", marginBottom: ".5rem" }}>
          Welcome to Our Rental Service
        </h1>
        <p style={{ color: "#333", marginBottom: ".5rem" }}>
          Find the perfect rental property for you!
        </p>
        {/* Include your CTA button component here */}
        <CtaButton onClick={handleOpenModal}>Let's Get Stated</CtaButton>
      </OverlayContent>
      <LoginModal show={isModalOpen} onClose={handleCloseModal} />
    </HeroCarouselContainer>
  );
};

export default HeroCarousel;
