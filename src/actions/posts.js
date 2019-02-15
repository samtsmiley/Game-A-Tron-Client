import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


//POST a post
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';
export const postPostSuccess = (data) => ({
    type: POST_POST_SUCCESS,
    data,
});

export const POST_POST_ERROR = 'POST_POST_ERROR';
export const postPostError = error => ({
    type: POST_POST_ERROR,
    error,
});

export const POST_POST_REQUEST = 'POST_POST_REQUEST';
export const postPostRequest = () => ({
    type: POST_POST_REQUEST,
});

export const postPost = values => (dispatch, getState) => {
    // console.log('POSTING GAME ACTION SENDING', JSON.stringify(values));
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