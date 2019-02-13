//post a game
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
    // console.log('POSTING GAME ACTION SENDING', JSON.stringify(values));
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
            // console.log('post res:',res )
            dispatch(postGameSuccess(res))
        })
        .catch(err => {
            dispatch(postGameError(err));
        });
};

// fetch game by id
export const FETCH_GAME_BY_ID_REQUEST = 'FETCH_GAME_BY_ID_REQUEST';
export const fetchGameByIdRequest = () => ({
    type: FETCH_GAME_BY_ID_REQUEST,
});

export const FETCH_GAME_BY_ID_SUCCESS = 'FETCH_GAME_BY_ID_SUCCESS';
export const fetchGameByIdSuccess = data => ({
    type: FETCH_GAME_BY_ID_SUCCESS,
    data
});

export const FETCH_GAME_BY_ID_ERROR = 'FETCH_GAME_BY_ID_ERROR';
export const fetchGameByIdError = error => ({
    type: FETCH_GAME_BY_ID_ERROR,
    error
});

export const fetchGameById = (id) => (dispatch, getState) => {
    console.log('FETCHING GAME_BY_ID ACTION');
    const authToken = getState().auth.authToken;
    dispatch(fetchGameByIdRequest())
    return fetch(`${API_BASE_URL}/games/${id}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(data => dispatch(fetchGameByIdSuccess(data)))
        .catch(err => {
            dispatch(fetchGameByIdError(err));
        });
};