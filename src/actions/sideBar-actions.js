import {API_BASE_URL} from '../config';
// import {normalizeResponseErrors} from './utils';
// import store from '../store';

// showProfile:state.
        // showFindGame:state.
        // showNewGame:state.
        // showOneGame:state.
		// showAllPosts:state.


export const SHOW_PROFILE = 'SHOW_PROFILE';
export const showProfile = () => ({

  type: SHOW_PROFILE
  
})

export const SHOW_ALL_POSTS = 'SHOW_ALL_POSTS';
export const showAllPosts = () => ({

  type: SHOW_ALL_POSTS
  
})

export const SHOW_ONE_GAME = 'SHOW_ONE_GAME';
export const showOneGame = () => ({

  type: SHOW_ONE_GAME
  
})

export const SHOW_NEW_GAME = 'SHOW_NEW_GAME';
export const showNewGame = () => ({

  type: SHOW_NEW_GAME
  
})

export const SHOW_FIND_GAME = 'SHOW_FIND_GAME';
export const showFindGame = () => ({

  type: SHOW_FIND_GAME
  
})

 


// GET MY GAMES

export const FETCH_MYGAMES_REQUEST = 'FETCH_MYGAMES_REQUEST';
export const fetchMyGamesRequest = (userId) => {

  return(dispatch, getState) => {

    fetch(`${API_BASE_URL}/users/${userId}`,{

      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
    .then((response)=>{
      return response.json();

    })
    .then(data => {
      dispatch(fetchMyGamesSuccess(data))})
    .catch(error => console.log(error))
 
  }

}

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


//REF
// export const fetchMyGames = (userId) => (dispatch) => {

//   //const authToken = store.getState().auth.authToken;

//   return fetch(`${API_BASE_URL}/users/${userId}`, {

//     method: 'GET',
//     headers: {
//       //  Authorization: `Bearer ${authToken}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     } 

//   })
//   .then(res => normalizeResponseErrors(res))
//   .then(res => res.json())
//   .then(myGames => dispatch(fetchMyGamesSuccess(myGames)))
//   .catch(err => {
//     dispatch(fetchMyGamesError(err));
//   })


// }