import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

//POST a post
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';
export const postPostSuccess = (data) => ({ 
    type: POST_POST_SUCCESS,
    data
});

export const POST_POST_ERROR = 'POST_POST_ERROR';
export const postPostError = error => ({
    type: POST_POST_ERROR,
    error
});

export const POST_POST_REQUEST = 'POST_POST_REQUEST';
export const postPostRequest = () => ({
    type: POST_POST_REQUEST,
});

export const postPost = values => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(postPostRequest());
    return fetch(`${API_BASE_URL}/posts/`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values)     
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res)=>{
            // console.log('post res:',res )
            dispatch(postPostSuccess(res))
        })
        .catch(err => {
            dispatch(postPostError(err));
        });
};

// fetch posts for one user by Userid
export const FETCH_ALL_POSTS_FOR_USER_BY_ID_REQUEST = 'FETCH_ALL_POSTS_FOR_USER_BY_ID_REQUEST';
export const fetchAllPostsForUserByIdRequest = () => ({
    type: FETCH_ALL_POSTS_FOR_USER_BY_ID_REQUEST,
});

export const FETCH_ALL_POSTS_FOR_USER_BY_ID_SUCCESS = 'FETCH_ALL_POSTS_FOR_USER_BY_ID_SUCCESS';
export const fetchAllPostsForUserByIdSuccess = data => ({
    type: FETCH_ALL_POSTS_FOR_USER_BY_ID_SUCCESS,
    data
});

export const FETCH_ALL_POSTS_FOR_USER_BY_ID_ERROR = 'FETCH_ALL_POSTS_FOR_USER_BY_ID_ERROR';
export const fetchAllPostsForUserByIdError = error => ({
    type: FETCH_ALL_POSTS_FOR_USER_BY_ID_ERROR,
    error
});

export const fetchAllPostsForUserById = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchAllPostsForUserByIdRequest())
    return fetch(`${API_BASE_URL}/posts/?userId=${id}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(fetchAllPostsForUserByIdSuccess(data))})
        .catch(err => {
            dispatch(fetchAllPostsForUserByIdError(err));
        });
};