import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/CaruselOne.scss';
import Mole from '../assets/img/Mole.jpg';

const Carusel = () => (
  <section className="carouselOne">
    <div className="carouselOne__container">
      <div className="carouselOne-item">
        <img className="carouselOne-item__img" src={Mole} alt=""  />
      </div>
      <div className="carouselOne-item">
        <img className="carouselOne-item__img" src={Mole} alt=""  />
      </div>
      <div className="carouselOne-item">
        <img className="carouselOne-item__img" src={Mole} alt=""  />
      </div>
      <div className="carouselOne-item">
        <img className="carouselOne-item__img" src={Mole} alt=""  />
      </div>
      <div className="carouselOne-item">
        <img className="carouselOne-item__img" src={Mole} alt=""  />
      </div>
    </div>
  </section>
)

export default Carusel;