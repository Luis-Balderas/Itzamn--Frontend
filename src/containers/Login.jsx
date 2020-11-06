import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions'
import Header from '../components/Header';
import '../assets/styles/Login.scss';

const Inicio = props => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const handleSumbit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }


  return(
      <>
    <Header isLogin />
   <section className="Container">
      <form action="" className="Card" onSubmit={handleSumbit}>
          <h1>Login</h1>
          <input
           placeholder="Email"
            className="Email"
            type="email" 
            name="email" 
            onChange={handleInput}
            id=""/>
          <input 
           placeholder="Password"
           className="Password"
           type="password"
           name="password"
           onChange={handleInput}
           id=""/>
          <label htmlFor="">
              <input type="checkbox" name="" id=""/>
              Recuerdame
          </label>
          <button>Continuar</button>
          <Link to="/Registro">¿Ya tienes cuenta?</Link>
      </form>
   </section>
   </>
 );
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps) (Inicio);