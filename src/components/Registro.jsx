import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Sesion.scss';

const Sesion = () => (
    <div className="Inicio">
    <section className="Card-Inicio">
       <div className="Inicio-Title">
          <h3>
              Registro
          </h3>
       </div>
       <div className="Inicio-Inputs">
         <input type="text" placeholder="User"/>
         <input type="email" name="" id="" placeholder="Email" />
         <input type="password" name="" id="" placeholder="Paswword" />
       </div>
       <div className="Inicio-Buttons">
          <div className="Button-Container">
            <button>Continuar</button>
          </div>
       </div>
   </section>
  </div>
)

export default Sesion;