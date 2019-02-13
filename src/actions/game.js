import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const POST_GAME_SUCCESS = 'POST_GAME_SUCCESS';
export const postGameSuccess = (data) => ({
    type: POST_GAME_SUCCESS,
    data,
});

export const POST_GAME_ERROR = 'POST_GAME_ERROR';
export const postGameError = error => ({
    type: POST_GAME_ERROR,
    error,
});

export const POST_GAME_REQUEST = 'POST_GAME_REQUEST';
export const postGameRequest = () => ({
    type: POST_GAME_REQUEST,
});

export const postGame = values => (dispatch, getState) => {
    console.log('POSTING GAME ACTION SENDING', JSON.stringify(values) );
    const authToken = getState().auth.authToken;
    dispatch(postGameRequest());
    return fetch(`${API_BASE_URL}/games/`, {
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
            console.log('post res:',res )
            dispatch(postGameSuccess(res))
        })
        .catch(err => {
            dispatch(postGameError(err));
        });
};

