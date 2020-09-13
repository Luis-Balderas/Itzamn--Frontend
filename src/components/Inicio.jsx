import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/Sesion.scss';

const Inicio = props => {
     
  const [form, setValues] = useState({
    email: '',
  });
  
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/Home');
  }


  return(
  <div className="Inicio">
    <section className="Card-Inicio">
       <div className="Inicio-Title">
          <h3>
              Inicio de Sesion
          </h3>
       </div>
       <form className="Inicio-Inputs" onSubmit={handleSubmit} >
         <input 
         type="email" 
         name="email" 
         id="" 
         placeholder="Email" 
         onChange={handleInput}
         />
         <input 
         type="password" 
         name="password" 
         id="" 
         placeholder="Paswword" 
         onChange={handleInput}
         />
            <button type="submit">Continuar</button>
       </form>
       <div className="Inicio-Buttons">
          <div className="Button-Element">
            <div className="Element-Input">
                <input type="checkbox" name="" id=""/>
                <p>Recordarme</p>
            </div>
            <div className="Element-Cuenta">
                <Link to="/Registro">
                  <a>¿Ya tienes una cuenta?</a>
                </Link>
            </div>
          </div>
       </div>
   </section>
  </div>
 )
}


const mapDispatchToProps = {
  loginRequest,
}


export default connect(null, mapDispatchToProps) (Inicio);