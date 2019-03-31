import axios from 'axios';
import { bindActionCreators } from 'redux';

import store from '../store/store';

export const loadPosts = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
            dispatch({
                type:"LOAD_POST",
                payload:resp.data
            })
        })
    }
}

export const loadSinglePost = (id) => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(resp => {
            dispatch({
                type:"LOAD_SINGLE_POST",
                payload:resp.data
            })
        })
    }
}


const loadPostsActions = bindActionCreators({
    loadPosts,
    loadSinglePost
}, store.dispatch);

export default loadPostsActions;

