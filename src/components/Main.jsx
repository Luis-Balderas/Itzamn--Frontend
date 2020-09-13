import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../assets/styles/Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Norte from '../assets/img/Norte.png';
import Centro from '../assets/img/Centro.jpg';
import Sur from '../assets/img/sur.jpg';






const Home = () => (
 <section className="Home">
  <div className="Home-titulo">
      <div className="titulo-h">
          <h1>Sabor Mexicano</h1>
      </div>
  </div>
  

  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Norte}
        alt="Sabor Norteño"
      />
      <Carousel.Caption>
        <dir className="Texto">
          <h1>Conoce la asombrosa Gastronomia <br/>
             y Historia del Norte de México</h1>
        </dir>
        <dir>
            <Link to="/SaborN">
              <button className="button">
                Conocer
              </button>
            </Link>
        </dir>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Centro}
        alt="Sabor Norteño"
      />
      <Carousel.Caption>
        <dir className="Texto">
          <h1>Conoce la asombrosa Gastronomia <br/>
             y una rica cultura en la CDMX</h1>
        </dir>
        <dir> 
              <Link to="/SaborC">
              <button className="button">
                Conocer
              </button>
              </Link>
        </dir>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Sur}
        alt="Sabor Norteño"
      />
      <Carousel.Caption>
        <dir className="Texto">
          <h1>Conoce la asombrosa Gastronomia <br/>
             y un viaje por la historia del sur de México.</h1>
        </dir>
        <dir>
              <Link to="/SaborS">
              <button className="button">
                Conocer
              </button>
              </Link>
        </dir>
      </Carousel.Caption>
    </Carousel.Item>


  </Carousel>

 </section>
);


export default connect(null, null) (Home);