import React from 'react';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Main';
import SaborN from '../containers/SaborN';
import SaborC from '../containers/SaborC';
import SaborS from '../containers/SaborS';
import NotFound from '../containers/NotFound';
import ConocerMas from '../containers/ConocerMas';
import Pots from '../containers/Pots';
import Inicio from '../containers/Inicio';
import Registro from '../containers/Registro';



const App = () =>(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SaborN" component={SaborN} />
          <Route exact path="/SaborC" component={SaborC} />
          <Route exact path="/SaborS" component={SaborS} />
          <Route exact path="/ConocerMas" component={ConocerMas} />
          <Route exact path="/Inicio" component={Inicio} />
          <Route exact path="/Registro" component={Registro} />
          <Route exact path="/Pots" component={Pots} />
          <Route component={NotFound} />          
        </Switch>
      </Layout>
    </BrowserRouter>
);

export default App;