import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './App';

const initialState = {
    currentCartCount:0
}

const rootReducer = (state = initialState) => {
    let newState = {...state};
// logic to update the newState

    return newState;
}

const store = createStore(rootReducer);

ReactDom.render(
<Provider store={store}>
    <App /> 
</Provider>
, document.getElementById('root'));