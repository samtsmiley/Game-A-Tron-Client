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
    // console.log(values)
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
            // console.log('res',res)
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
        .then(data =>{
             dispatch(fetchGameByIdSuccess(data))})
        .catch(err => {
            dispatch(fetchGameByIdError(err));
        });
};

//Join a game by gameId
export const JOIN_GAME_SUCCESS = 'JOIN_GAME_SUCCESS';
export const joinGameSuccess = data => ({
    type: JOIN_GAME_SUCCESS,
    data
});

export const JOIN_GAME_ERROR = 'JOIN_GAME_ERROR';
export const joinGameError = error => ({
    type: JOIN_GAME_ERROR,
    error
});

export const JOIN_GAME_REQUEST = 'JOIN_GAME_REQUEST';
export const joinGameRequest = () => ({
    type: JOIN_GAME_REQUEST,
});

export const joinGame = (id, userName) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(joinGameRequest());
    return fetch(`${API_BASE_URL}/games/join/${id}`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data)=>{
            dispatch(joinGameSuccess(data))
        }) 
        .catch(err => {
            dispatch(joinGameError(err));
        });
};

// fetch game by id
export const FETCH_All_GAMES_REQUEST = 'FETCH_All_GAMES_REQUEST';
export const fetchAllGamesRequest = () => ({
    type: FETCH_All_GAMES_REQUEST,
});

export const FETCH_All_GAMES_SUCCESS = 'FETCH_All_GAMES_SUCCESS';
export const fetchAllGamesSuccess = allGames => ({
    type: FETCH_All_GAMES_SUCCESS,
    allGames
});

export const FETCH_All_GAMES_ERROR = 'FETCH_All_GAMES_ERROR';
export const fetchAllGamesError = error => ({
    type: FETCH_All_GAMES_ERROR,
    error
});

export const fetchAllGames = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchAllGamesRequest())
    return fetch(`${API_BASE_URL}/games`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(fetchAllGamesSuccess(data))})
        .catch(err => {
            dispatch(fetchAllGamesError(err));
        });
};

export const UPDATE_SCORE_REQUEST = 'UPDATE_SCORE_REQUEST';
export const updateScoreRequest = () => ({
    type: UPDATE_SCORE_REQUEST
});
export const UPDATE_SCORE_SUCCESS = 'UPDATE_SCORE_SUCCESS';
export const updateScoreSuccess = data => ({
    type: UPDATE_SCORE_SUCCESS,
    data
});
export const UPDATE_SCORE_ERROR = 'UPDATE_SCORE_ERROR';
export const updateScoreError = error => ({
    type: UPDATE_SCORE_ERROR,
    error
});

// body should be {userId, score} where score is the new score
export const updateScore = (gameId, body) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(updateScoreRequest());
    return fetch(`${API_BASE_URL}/games/scores/${gameId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(updateScoreSuccess(data))})
        .catch(err => dispatch(updateScoreError(err)));
};