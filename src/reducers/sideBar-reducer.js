import {
  SHOW_PROFILE,
  SHOW_ALL_POSTS,
  SHOW_ONE_GAME,
  SHOW_NEW_GAME,
  SHOW_FIND_GAME,
  FETCH_MYGAMES_REQUEST,
  FETCH_MYGAMES_SUCCESS,
  FETCH_MYGAMES_ERROR



} from '../actions/sideBar-actions';
 
const initialState = {
  showProfile:true, 
  showFindGame:false,
  showNewGame:false,
  showOneGame:false,
  showAllPosts:false,
  myGames:[],
  loadingComplete:false,
  loading:false,
  error:null
  
};

export default function reducer(state = initialState, action) {
 
  //SHOW ALL CURRENT USER'S POSTS
  if(action.type === SHOW_PROFILE) {
 
    return Object.assign({}, state, {
      showProfile:true,//<-- ON
      showFindGame:false,
      showNewGame:false,
      showOneGame:false,
	    showAllPosts:false 
    })

  }

  //SHOW ALL POSTS
  if(action.type === SHOW_ALL_POSTS) {
 
    return Object.assign({}, state, {
      showProfile:false,
      showFindGame:false,
      showNewGame:false,
      showOneGame:false,
	    showAllPosts:true//<-- ON
    })

  }

  //SHOW ONE GAME
  if(action.type === SHOW_ONE_GAME) {
 
    return Object.assign({}, state, {
      showProfile:false,
      showFindGame:false,
      showNewGame:false,
      showOneGame:true,//<-- ON
	    showAllPosts:false
    })

  }

  //SHOW NEW GAME
  if(action.type === SHOW_NEW_GAME) {
    
    return Object.assign({}, state, {
      showProfile:false,
      showFindGame:false,
      showNewGame:true,//<-- ON
      showOneGame:false,
	    showAllPosts:false 
    })

  }


  //SHOW FIND GAME
  if(action.type === SHOW_FIND_GAME) {
    
    return Object.assign({}, state, {
      showProfile:false,
      showFindGame:true,//<-- ON
      showNewGame:false,
      showOneGame:false,
	    showAllPosts:false 
    })

  }





  //GET ALL MY GAMES

  if(action.type === FETCH_MYGAMES_REQUEST) {
    
    return Object.assign({}, state, {
      loadingComplete: false,
      loading: true,
      error: null

    });

  }

  if(action.type === FETCH_MYGAMES_SUCCESS) {

    return Object.assign({}, state, {
      myGames: action.myGames,
      loadingComplete: true,
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