import React, {useState, useEffect }  from 'react';
import Header from '../components/Header';
import '../assets/styles/Conocer.scss';
import Uno from '../assets/img/PrincipalOne.jpg';
import Dos from '../assets/img/PrincipalTwo.jpg';
import Conocer from '../components/Conocer';

const ConocerMas = () => {
    const [event, setEvent ] = useState([]);


    useEffect(() => {
      fetch('http://localhost:3000/api/events')
       .then(response => response.json())
       .then(data => {setEvent(data)
        console.log(event)});
        
    }, []);

   
    return(
    <>
    <Header />
    <section className="Conocer">
      <div className="Conocer-Super">
          <div className="tex">
            Enamorate y conoce la <br/> gastronomia mexicana
          </div>
          <div className="Img">
            <img src={Uno} alt=""/>
            <img src={Dos} alt=""/>
          </div>
      </div>
      <div className="search-Conteiner">
       <div className="Serch">
         <input type="text" placeholder="Search"/>
       </div>
      </div>
      <div className="Conocer-Container">
          {event.data?.map(item => 
           <Conocer key={item.id} {...item} />
          )}
      </div>
    </section>
    </>
  )
}

export default ConocerMas;