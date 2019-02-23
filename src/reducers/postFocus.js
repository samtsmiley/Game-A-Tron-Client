import{SHOW_POST_FOCUS,EXIT_POST_FOCUS} from '../actions/postFocus'

const initialState = {

  showPostWindow: false

}

export default function reducer(state = initialState, action) {



  if(action.type === SHOW_POST_FOCUS) {

    return Object.assign({}, state, {
      showPostWindow: true
    })

  }

  if(action.type === EXIT_POST_FOCUS) {

    return Object.assign({}, state, {
      showPostWindow: false
    })

  }

  

  return state;
 
}