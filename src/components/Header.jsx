import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/Header.scss';
import Marca from '../assets/img/icono-Marca.png';
import User from '../assets/img/usuario.png';

const Header = props => { 
 const { user, isLogin, isRegister } = props;
 const hashUser = Object.keys(user).length > 0;

 const handleLogout = () => {
   props.logoutRequest({})
 }

 const headerClass = classNames('header', {
   isLogin, 
   isRegister,
 });

  return(   
    <section className={headerClass}>
    <div className="Logo">
      <Link to='/'>
        <img src={Marca} alt=""/>
      </Link>
    </div>
    

    <div className="Perfil">
      <div className="Header__menu">
          <div className="Header__menu--profile">
            {hashUser ? 
              <img src={gravatar(user.email)} alt={user.email}/>:
              <img src={User} alt=""/>
            }
          </div>
          <ul>
            {hashUser ?
              <li><a href="">{user.name}</a></li>
              :null
            }

            {hashUser ?
              <li><a href="#logout" onClick={handleLogout} >Cerrar Sesión</a></li>
              :
              <li>
                <Link to="/Login">
                  Iniciar sesion
                </Link>
              </li>
            }
          </ul>
      </div>
    </div>
  </section>
 )
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);