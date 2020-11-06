import React from 'react';
import { useParams } from 'react-router-dom';

const Detalle = () => {
 const { id } = useParams();

  return(
    <h1>{ id }</h1>
)}

export default Detalle;