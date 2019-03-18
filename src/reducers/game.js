import {
    FETCH_GAME_BY_ID_REQUEST,
    FETCH_GAME_BY_ID_SUCCESS,
    FETCH_GAME_BY_ID_ERROR,
    JOIN_GAME_SUCCESS,
    JOIN_GAME_REQUEST,
    JOIN_GAME_ERROR,
    FETCH_All_GAMES_ERROR,
    FETCH_All_GAMES_SUCCESS,
    FETCH_All_GAMES_REQUEST,
    UPDATE_SCORE_REQUEST,
    UPDATE_SCORE_SUCCESS,
    UPDATE_SCORE_ERROR,
    POST_GAME_ERROR,
    POST_GAME_SUCCESS,
    POST_GAME_REQUEST,    
} from '../actions/game';

import {
    POST_POST_SUCCESS,

}from '../actions/post';

const initialState = {
    error: null,
    loading: false,
    data: {participants: []},
    allGames: []
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_GAME_BY_ID_SUCCESS) {
        // console.log('game is ', action.data)
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false,
        });
    } else if (action.type === FETCH_GAME_BY_ID_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    } else if (action.type === FETCH_GAME_BY_ID_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === JOIN_GAME_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false,
        });
    } else if (action.type === JOIN_GAME_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    } else if (action.type === JOIN_GAME_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === FETCH_All_GAMES_SUCCESS) {
        return Object.assign({}, state, {
            allGames: action.allGames,
            error: null,
            loading: false,
        });
    } else if (action.type === FETCH_All_GAMES_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    } else if (action.type === FETCH_All_GAMES_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === POST_GAME_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false,
        });
    } else if (action.type === POST_GAME_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    } else if (action.type === POST_GAME_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === POST_POST_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            loading: false,
        });
    } else if (action.type === UPDATE_SCORE_REQUEST) return {...state, loading: true};
    else if (action.type === UPDATE_SCORE_SUCCESS) return {...state, data: action.data, error: null, loading: false};
    else if (action.type === UPDATE_SCORE_ERROR) return {...state, error: action.error, loading: false };

    else return state;
}
