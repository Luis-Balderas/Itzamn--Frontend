import React from 'react';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Main';
import NotFound from '../containers/NotFound';
import Registro from '../containers/Registro';
import Login from '../containers/Login';
import Conocer from '../containers/Conocer';
import Detalle from '../containers/Detalle';
import Ex from '../containers/Experimento'


const App = () => (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Registro" component={Registro} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Conocer" component={Conocer} />
          <Route path="/detalle/:id">
             <Detalle />
          </Route>
          <Route exact path="/Ex" component={Ex} />
          <Route component={NotFound} />          
        </Switch>
      </Layout>
    </BrowserRouter>
);

export default App;