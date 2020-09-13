import React from 'react';
;
import {Link} from 'react-router-dom';

import '../assets/styles/Header.scss';
import Marca from '../assets/img/icono-Marca.png';
import User from '../assets/img/usuario.png';

const Header = () => { 
//  const { user } = props;
// const hashUser = Object.keys(user).length > 0;
  return(   
    <section className="Header">
    <div className="Logo">
      <Link to='/Home'>
        <img src={Marca} alt=""/>
      </Link>
    </div>
    <div className="Buscador">
      <div className="Buscador-Conteiner">
         <input type="search" name="" id=""/>
         <input type="search" name="" id=""/>
         <button>
            Buscar
         </button>
      </div>
    </div>
    <div className="Perfil">
      <div className="Header__menu">
          <div className="Header__menu--profile">

              <img src={User} alt=""/>

          </div>
          <ul>
            <li><a href="">Cuenta</a></li>
            <li>
              <Link to="/Inicio">
                Iniciar sesion
              </Link>
            </li>
          </ul>
      </div>

    </div>
  </section>
 )
}


export default Header;
