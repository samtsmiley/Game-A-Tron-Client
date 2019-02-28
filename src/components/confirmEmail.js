import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {confirmEmail} from '../actions/email';

export class ConfirmEmail extends React.Component {
  state = {confirming: true};
  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log(id);
    this.props.dispatch(confirmEmail(id))
    this.setState({confirming: false});
  }

  render() {
    if (!this.state.confirming) return <Redirect to='/'/>
    return (
      <div className='confirmEmail'>
        <p>Processing ... If you are not automatically redirected, please click <Link className='link' to='/'>this link</Link></p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.email.message,
  // error: state.email.error
});
export default connect(mapStateToProps)(ConfirmEmail);
