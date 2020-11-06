import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import '../assets/styles/Home.scss';
import Carousel from 'react-bootstrap/Carousel'
import Norte from '../assets/img/Norte.png'
import Centro from '../assets/img/Centro.jpg'
import Sur from '../assets/img/sur.jpg'


const Home = () => (
  <>
  <Header />
 <section className="Home">
     <div className="title">
        <div>
          <h1>Sabor Mexicano</h1>
        </div>
     </div>
     <div className="Carusel-Container">
        <Carousel className="Carousel">
          <Carousel.Item className="Item">
            <img
            className="d-block w-100"
            src={Norte}
            alt="First slide"
            />
            <Carousel.Caption className="Caption">
              <h3>Sabor Norteño</h3>
              <p>Conoce la gastronomia inigualable del Norte de México</p>
              <Link to='/Conocer'>
                <button>Conocer mas</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Item">
            <img
            className="d-block w-100"
            src={Centro}
            alt="First slide"
            />
            <Carousel.Caption className="Caption">
              <h3>Sabor Capitalino</h3>
              <p>Disgruta de la gastronomi mientras estas rodeado de la historia capitalina</p>
              <Link to='/Conocer'>
                <button>Conocer mas</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="Item">
            <img
            className="d-block w-100"
            src={Sur}
            alt="First slide"
            />
            <Carousel.Caption className="Caption">
              <h3>Sabor Sureño</h3>
              <p>Disfruta de la gastronomi y la gran cultura del Sur de México</p>
              <Link to='/Conocer'>
                <button>Conocer mas</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
     </div>
 </section>
 </>
);


export default connect(null, null) (Home);