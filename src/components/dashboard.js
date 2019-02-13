import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import HeaderBar from './headerBar';
import  NewGame  from './newGame';

export class Dashboard extends React.Component {



    componentDidMount() {
    }

    render() {
        return (
            <div className="dashboard">
              <HeaderBar/>
              <NewGame/>

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