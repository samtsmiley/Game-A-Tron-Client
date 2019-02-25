import {
    FETCH_ALL_POSTS_FOR_USER_BY_ID_REQUEST,
    FETCH_ALL_POSTS_FOR_USER_BY_ID_SUCCESS,
    FETCH_ALL_POSTS_FOR_USER_BY_ID_ERROR,
    POST_POST_SUCCESS,
    POST_POST_ERROR,
    POST_POST_REQUEST,

} from '../actions/post';

const initialState = {
    error: null,
    loading: false,
    myPosts: [{createdAt: '',
    description: '',
    gameId: '',
    id: '',
    updatedAt: '',
    userId: '',
    value: '',
    comment: '',
    image: null,
    imageId: null
    }]
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_ALL_POSTS_FOR_USER_BY_ID_SUCCESS) {
        // console.log('game is @ game reducer! ', action.data)
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
    } else if (action.type === FETCH_ALL_POSTS_FOR_USER_BY_ID_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === POST_POST_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    } else if (action.type === POST_POST_SUCCESS) {
        return Object.assign({}, state, {
            // posts: action.data,
            error: null,
            loading: false,
        });
    } else if (action.type === POST_POST_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    }        
    return state;
}
