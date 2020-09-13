import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Pots.scss';
import Card from '../components/Card';
import UserPots from '../components/UserPots';
import Perfil from '../assets/img/Perfil.jpg';



const Pots = () =>( 
  <section className="Pots">
    <section className="pots-Conteiner">
        <div className="conteiner-Public">
            <div className="public-card">
                <div>
                  <img src={Perfil} alt=""/>
                </div>
                <div>
                  <input type="text"/>
                </div>
            </div>
        </div>
         <div>
            <Card />
         </div>
    </section>
    <section>
        <UserPots />
    </section>
  </section>
);

export default Pots;