import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { reducer } from './Reducers/index';
import thunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase';
import store from './Store/Store'
// const store = createStore(reducer,applyMiddleware(thunk))


ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);


