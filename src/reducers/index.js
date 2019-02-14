import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth'
import sideBar from './sideBar-reducer';
import game from './game'


const rootReducer = combineReducers({
  form: formReducer,
  auth,
  sideBar,
  game

});

export default rootReducer;