import {
    FETCH_ALL_POSTS_FOR_USER_BY_ID_REQUEST,
    FETCH_ALL_POSTS_FOR_USER_BY_ID_SUCCESS,
    FETCH_ALL_POSTS_FOR_USER_BY_ID_ERROR,
} from '../actions/post';

const initialState = {
    error: null,
    loading: false,
    myPosts: null,
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_ALL_POSTS_FOR_USER_BY_ID_SUCCESS) {
        // console.log('game is ', action.data)
        return Object.assign({}, state, {
            myPosts: action.data,
            error: null,
            loading: false,
        });
    } else if (action.type === FETCH_ALL_POSTS_FOR_USER_BY_ID_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    }
    else if (action.type === FETCH_ALL_POSTS_FOR_USER_BY_ID_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    }      
    return state;
}
