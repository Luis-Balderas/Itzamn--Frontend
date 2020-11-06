import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/Login.scss';

const Sesion = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const handleSumbit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }

  return(
    <>
    <Header isRegister />
    <section className="Container">
       <form action="" className="Card" onSubmit={handleSumbit} >
         <h1>Registro</h1>
         <input 
         className="Name" 
         type="text" 
         name="name" 
         id=""
         placeholder="Name"
         onChange={handleInput}
          />
         <input 
         className="Email"
         type="email" 
         name="email" 
         id=""
         placeholder="Email"
         onChange={handleInput}
         />
         <input 
         className="Password" 
         type="password" 
         name="password" 
         id=""
         placeholder="Password"
         onChange={handleInput}
         />
         <label htmlFor="">
            <input type="checkbox" name="" id=""/>
            Recuerdame
         </label>
         <button type="submit">
           Continuar
         </button>
       </form>
    </section>
    </>
  )
}

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps) (Sesion);