import { INCREMENT_BY_ONE, ADD_PRODUCT_TO_CART } from '../../constants/actionTypes'

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