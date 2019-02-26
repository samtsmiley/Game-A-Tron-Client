import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const confirmEmailRequest = () => ({
  type: 'CONFIRM_EMAIL_REQUEST'
});
export const confirmEmailSuccess = () => ({
  type: 'CONFIRM_EMAIL_SUCCESS'
});
export const confirmEmailError = err => ({
  type: 'CONFIRM_EMAIL_ERROR',
  err
});

export const sendConfirmationEmail = () => (dispatch, getState) => {
  const email = getState().auth.currentUser.email;
  return fetch(`${API_BASE_URL}/email/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email})
  })
  .catch(err => console.log(err));
};

export const confirmEmail = id => dispatch => {
  dispatch(confirmEmailRequest());
  return fetch(`${API_BASE_URL}/email/confirm/${id}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(confirmEmailSuccess(data)))
    .catch(err => dispatch(confirmEmailError(err)));
}
