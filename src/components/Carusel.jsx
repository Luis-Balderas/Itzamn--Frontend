import React from 'react';
import {Link} from 'react-router-dom';
import Mole from '../assets/img/Mole.jpg';
import Carousel from 'react-bootstrap/Carousel';

const Carusel = () => (
  <section>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mole}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mole}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mole}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  </section>
);

export default Carusel;