import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth'
import sideBarReducer from './sideBar-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth,
  myGames: sideBarReducer

});

export default rootReducer;