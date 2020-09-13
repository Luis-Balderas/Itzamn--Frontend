import React from 'react';
import {Link} from 'react-router-dom';


const Superior = () => (
  <section className="conteiner-Superior">
      <div ClassName="CardPublic">
      <div className="Izq-Button">
        <Link to="/Pots">
          <button>
           <h1>Cuentanos algo</h1>
          </button>
        </Link>
        </div>
      </div>
      <div className="superior-Titulo">
        <h1>Enchiladas de Mole</h1>
      </div>
  </section>
);

export default Superior;