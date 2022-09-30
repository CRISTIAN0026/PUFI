import React, {useState}  from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img2 from './img/_109281889_gettyimages-1135306444.jpg';
import img1 from './img/f.elconfidencial.com_original_0b0_cb4_bb2_0b0cb4bb230324a1b51cd9d723a1b297.jpg';
import img3 from './img/XboxSeriesXController_HERO.jpg';
import "./Carousel.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="block"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
