import { INCREMENT_BY_ONE, ADD_PRODUCT_TO_CART } from '../../constants/actionTypes'


const initialState = {
    currentCartCount:0,
    currentList:[]
}


/*

sample action to increment count:

{
    type:"INCREMENT_BY_ONE",
    payload:""
}

sample action to add product:

{
    type:"ADD_PRODUCT",
    payLoad: {
                name:'samsung',
                price:2000,
                color:'blue',
                logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFBRdGo-cS2IYn6I7xFFsf62spfAUqo90hc0XpVPnTQTxy2MS'   
            }
}

*/

const cartReducer = (state = initialState, action) => {
    let newState = {...state};
// logic to update the newState
    if(action.type === INCREMENT_BY_ONE){
        newState.currentCartCount++;
    }else if( action.type === ADD_PRODUCT_TO_CART){
        newState.currentList.push(action.payload);
    }

    return newState;
}

export default cartReducer;