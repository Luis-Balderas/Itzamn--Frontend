import React from 'react';
import '../assets/styles/ConocerMas.scss';
import Carusel from '../components/Carusel';
import Superior from '../components/CardSuperior';
import Inferior from '../components/CardInferior';


const Conocer = () =>(
  <section className="Conteiner-Conocer">
      <div className="CardSuperior">
        <div>
          <Superior />
        </div>  
      </div>
      <div className="Carusel">
        <div className="Conteiner-Carusel">
          <Carusel />
        </div>
      </div>
      <div className="CardIferior">
          <div>
             <Inferior />
          </div>
      </div>
  </section>
);

export default Conocer;