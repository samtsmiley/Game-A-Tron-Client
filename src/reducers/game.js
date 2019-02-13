import {
    FETCH_GAME_BY_ID_REQUEST,
    FETCH_GAME_BY_ID_SUCCESS,
    FETCH_GAME_BY_ID_ERROR,
    
  
} from '../actions/game';

const initialState = {
    error: null,
    loading: false,
    data: null,
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
    return state;
}
