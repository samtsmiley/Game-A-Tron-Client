const initialState = {confirming: false, message: '', error: null};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CONFIRM_EMAIL_REQUEST': return {confirming: true, message: 'confirming your email', error: null};
    case 'CONFIRM_EMAIL_SUCCESS': return {...state, message: action.data.message, confirming: false};
    case 'CONFIRM_EMAIL_ERROR': return {confirming: false, message: 'could not confirm', error: action.err};
    default: return state;
  }
}
