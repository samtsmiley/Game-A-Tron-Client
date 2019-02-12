import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import HeaderBar from './headerBar';
// import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        // this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
              <HeaderBar/>
              <div className="dashboard-username">
                Username: {this.props.username}
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));