
const postReducer = (state = {
    posts:[],
    currentPost:null
}, action) => {
    let newState = {...state};
// logic to update the newState
    if(action.type === "LOAD_POST"){
        newState.posts = action.payload;
    }else if( action.type === "LOAD_SINGLE_POST"){
        newState.currentPost = action.payload;
    }

    return newState;
}

export default postReducer;