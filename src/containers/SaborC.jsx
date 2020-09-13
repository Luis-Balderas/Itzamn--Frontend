import React from 'react';
import '../assets/styles/SaborN.scss';
import CardIzq from '../components/CardIzq';
import CardDer from '../components/CardDer';


const Sabor = () =>( 
  <>
    <section className="Principal">
        <div className="principal-Izq">
          <CardIzq />
        </div>

        <div className="principal-Der">
          <CardDer />
        </div>
    </section>
  </>
);

export default Sabor;