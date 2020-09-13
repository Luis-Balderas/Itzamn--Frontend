import React from 'react';
import {Link} from 'react-router-dom';
import Perfil from '../assets/img/Perfil.jpg';


const UserPots = () => (
  <div className="UserCard">
      <div className="Card-conteiner">
         <div className="conteiner-img">
             <img src={Perfil} alt=""/>
         </div>
      </div>
      <div className="conteiner-text">
         <h2>
             Name:
         </h2>
         <h2>
             Total de Publicaciones
         </h2>
         <h2>
             Total de comentarios
         </h2>
      </div>
  </div>
);

export default UserPots;