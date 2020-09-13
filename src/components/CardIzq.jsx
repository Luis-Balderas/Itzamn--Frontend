import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';


const CardIzq = () => (
    <section className="Principal-Izq">
        <div className="Izq-Button">
        <Button />
        </div>
        <Card />
   </section>
);

export default CardIzq;