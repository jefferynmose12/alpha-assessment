import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import slide1 from "../../asset/images/slide1.png";
import slide2 from "../../asset/images/slide2.png";
import slide3 from "../../asset/images/slide3.png";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

interface SlideProps {
  backgroundImage: string;
  active: boolean;
}

const Slide = styled.div<SlideProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props: any) => (props.active ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 7px;
`;
interface DotProps {
  active: boolean;
}

const Dot = styled.div<DotProps>`
  cursor: pointer;
  height: 6px;
  width: 25px;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#fff" : "#ADA9BB")};
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      backgroundImage: slide1,
      title: "Latest News & Updates",
      content:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      backgroundImage: slide2,
      title: "Latest News & Updates",
      content:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      backgroundImage: slide3,
      title: "Latest News & Updates",
      content:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          backgroundImage={slide.backgroundImage}
          active={index === currentIndex}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute bottom-0 left-0 w-full p-3 pt-10 md:p-5 md:pb-10 text-white text-sm flex flex-col gap-2">
            <h6 className="font-semibold">{slide.title}</h6>
            <p className="leading-6">{slide.content}</p>
          </div>
        </Slide>
      ))}

      <PrevButton onClick={handlePrevClick}>
        <FaAngleLeft />
      </PrevButton>
      <NextButton onClick={handleNextClick}>
        <FaAngleRight />
      </NextButton>

      <CarouselDots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
