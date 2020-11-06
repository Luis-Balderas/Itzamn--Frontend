import React, {useState } from 'react';
import Header from '../components/Header';
import '../assets/styles/Ex.scss';


const Ex = () => {
    

    return(
<>
<Header />       
  <section className="Conteiner">
  <section className="FilterableProductTable" >
     <div className="SearchBar">
         <input type="text" placeholder="Search"/>
     </div>
     <div  className="EventTable" >
            <div className="EventCategoryRow" >
                <div className="EventRow" >
                    hola
                </div>
            </div>
            <div className="EventCategoryRow" >
                <div className="EventRow" >
                   Hola
                </div>
            </div>
        </div>
  </section>
  </section>
</> 
 );
}

export default Ex; 