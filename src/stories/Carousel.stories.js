import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" />,
    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" />,
    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" />,
  ],
};
Default.parameters = {
  docs: {
    source: {
      code: `import React, { useState } from 'react';
import './Carousel.css';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: 'translateX(-{currentIndex * 100}%)' }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <GrFormPrevious onClick={goToPrevious} className="carousel-button carousel-button-prev"/>
        <GrFormNext onClick={goToNext} className="carousel-button carousel-button-next"/>
      </div>
      <div className="carousel-dots">
        {items.map((_, index) => (
          <div
            key={index}
            className={'carousel-dot {currentIndex === index ? 'active' : ''}'}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
`
      ,
    },
  },
};