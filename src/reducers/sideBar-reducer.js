import {
  FETCH_MYGAMES_REQUEST,
  FETCH_MYGAMES_SUCCESS,
  FETCH_MYGAMES_ERROR

} from '../actions/sideBar-actions';


//add view modes in here
//selected game
const initialState = {
  myGames: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {

  if(action.type === FETCH_MYGAMES_REQUEST) {
    
    return Object.assign({}, state, {
      loading: true,
      error: null

    });

  }

  if(action.type === FETCH_MYGAMES_SUCCESS) {

    return Object.assign({}, state, {
      myGames: action.games,
      loading: false,
      error: null
    })

  }

  if(action.type === FETCH_MYGAMES_ERROR) {

    return Object.assign({}, state, {
    
      loading: false,
      error: action.error
    })

  }

  return state;

}