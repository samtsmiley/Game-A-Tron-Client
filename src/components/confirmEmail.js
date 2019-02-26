import React from 'react';
import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from '../actions/utils';

export default class ConfirmEmail extends React.Component {
  message = 'confirming your email';

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`${API_BASE_URL}/email/confirm/${id}`)
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(data => this.message = data.message)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='confirmEmail'>
        <p>{this.message}</p>
      </div>
    );
  }
}
