import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import cartReducer from '../reducers/cartReducer';
import postReducer from '../reducers/postReducer';


const store = createStore(
    combineReducers({cartReducer, postReducer}),
    applyMiddleware(thunk, logger)
);

export default store;
