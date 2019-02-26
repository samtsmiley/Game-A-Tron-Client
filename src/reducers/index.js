import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth'
import sideBar from './sideBar-reducer';
import game from './game'
import post from './post'
import postFocus from './postFocus';
import email from './email';


const rootReducer = combineReducers({
  form: formReducer,
  auth,
  sideBar,
  game,
  post,
  postFocus,
  email
});

export default rootReducer;