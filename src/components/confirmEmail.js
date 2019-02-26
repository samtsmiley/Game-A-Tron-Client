import React from 'react';
import { connect } from 'react-redux';
import {API_BASE_URL} from '../config';
import {confirmEmail} from '../actions/email';

export class ConfirmEmail extends React.Component {
  componentDidMount() {
    this.props.dispatch(confirmEmail(this.props.userId))
  }

  render() {
    return (
      <div className='confirmEmail'>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.email.message,
  userId: state.auth.currentUser.id
});
export default connect(mapStateToProps)(ConfirmEmail);
