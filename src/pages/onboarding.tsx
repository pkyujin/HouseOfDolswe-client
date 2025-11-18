import { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Onboarding() {
  const sliderRef = useRef<Slider>(null);

  const nextSlide = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false
  };

  return (
    <Container>
      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          <SlideBox>1단계 화면</SlideBox>
          <SlideBox>2단계 화면</SlideBox>
          <SlideBox>3단계 화면</SlideBox>
          <SlideBox>4단계 화면</SlideBox>
        </Slider>
      </SliderWrapper>

      <ButtonWrapper>
        <Button onClick={nextSlide}>다음</Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SlideBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
`;
