import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth'
import sideBar from './sideBar-reducer';
import game from './game'
import post from './post'


const rootReducer = combineReducers({
  form: formReducer,
  auth,
  sideBar,
  game,
  post,

});

export default rootReducer;