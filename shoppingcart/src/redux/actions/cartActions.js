import { bindActionCreators } from 'redux';

import store from '../store/store';
import { INCREMENT_BY_ONE, ADD_PRODUCT_TO_CART } from '../../constants/actionTypes';


export const incrementByOne = () => {
    return {
        type: INCREMENT_BY_ONE,
        payLoad:""
    }
}

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payLoad:product
    }
}

const cartActions = bindActionCreators({
    incrementByOne,
    addProductToCart
}, store.dispatch);

export default cartActions;
