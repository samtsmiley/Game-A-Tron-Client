import {
    FETCH_GAME_BY_ID_REQUEST,
    FETCH_GAME_BY_ID_SUCCESS,
    FETCH_GAME_BY_ID_ERROR,
    JOIN_GAME_SUCCESS,
    JOIN_GAME_REQUEST,
    JOIN_GAME_ERROR,
    FETCH_All_GAMES_ERROR,
    FETCH_All_GAMES_SUCCESS,
    FETCH_All_GAMES_REQUEST

    
  
} from '../actions/game';

const initialState = {
    error: null,
    loading: false,
    data: null,
    allGames: null
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
    }
    else if (action.type === FETCH_GAME_BY_ID_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    }  
    if (action.type === JOIN_GAME_SUCCESS) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
        });
    } else if (action.type === JOIN_GAME_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false,
        });
    }
    else if (action.type === JOIN_GAME_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    }
    else if (action.type === FETCH_All_GAMES_SUCCESS) {
            // console.log('game is ', action.data)
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
        }
        else if (action.type === FETCH_All_GAMES_REQUEST) {
            return Object.assign({}, state, {
                loading: true,
            });
        }  
    
    return state;
}
