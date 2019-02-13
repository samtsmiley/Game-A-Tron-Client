import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import store from '../store';


//maybe fetchMyGames



export const FETCH_MYGAMES_REQUEST = 'FETCH_MYGAMES_REQUEST';
export const fetchMyGamesRequest = (loading) => ({

  type: FETCH_MYGAMES_REQUEST,
  loading: true

})

export const FETCH_MYGAMES_SUCCESS = 'FETCH_MYGAMES_SUCCESS';
export const fetchMyGamesSuccess = (myGames) => ({

  type: FETCH_MYGAMES_SUCCESS,
  myGames,
  loading: false,
  error: null

})

export const FETCH_MYGAMES_ERROR = 'FETCH_MYGAMES_ERROR';
export const fetchMyGamesError = (error) => ({

  type: FETCH_MYGAMES_ERROR,
  loading: false,
  error: error

})

export const fetchMyGames = (userId) => (dispatch) => {

  const authToken = store.getState().auth.authToken;

  return fetch(`${API_BASE_URL}/users/${userId}`, {

    method: 'GET',
    headers: {
       Authorization: `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    } 

  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(myGames => dispatch(fetchMyGamesSuccess(myGames)))
  .catch(err => {
    dispatch(fetchMyGamesError(err));
  })


}