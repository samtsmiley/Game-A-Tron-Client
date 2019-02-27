import React from 'react';
import { connect } from 'react-redux';
import {confirmEmail} from '../actions/email';

export class ConfirmEmail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(confirmEmail(id))
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
  message: state.email.message
});
export default connect(mapStateToProps)(ConfirmEmail);
