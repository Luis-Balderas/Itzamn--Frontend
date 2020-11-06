import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Card.scss';


import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Cards.scss';




const Cards = ({ name, images, description }) => {
  
  return(
 <div className="Card"  >
  <div className="Cards-Container">
    <h1>{name}</h1>
      <img src={images} alt=""/>
    <p>{description}</p>
  </div>
 </div>

 )
}

export default Cards;

export default Card;