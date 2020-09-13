import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    "user":{},
}

const store = createStore(reducer, initialState);

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>, 
    document.getElementById('app'));