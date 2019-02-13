import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth'
import game from './game'


const rootReducer = combineReducers({
  form: formReducer,
  auth,
  game,

});

export default rootReducer;