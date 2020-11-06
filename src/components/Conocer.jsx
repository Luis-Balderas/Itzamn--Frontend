import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Principal.scss';




const Cards = ({ name, images}) => {
  
  return(
 <div className="Conocer-Card" >
    <div className="Conocer-text">
    <h5>{name}</h5>
    </div>
    <div className="Conocer-img">
      <img src={images} alt=""/>
    </div>
    <div className="button">
      <button>Continuar</button>
    </div>
 </div>
 

 )
}

export default Cards;