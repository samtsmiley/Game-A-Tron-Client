import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import HeaderBar from './headerBar';
import SideBar from './sideBar';
// import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        // this.props.dispatch(fetchProtectedData());
    }

    

    render() {

        //This is for sidebar testing -- replace with actual state info when available...
        let tempSideBarState = {
 
            CurrentGame: {name: 'potato race'},
            Players:['gamePlayer1','gamePlayer2','gamePlayer3'],
            MyGames:['game 1','game 2','potato race'],
            AllGames:['game 1','game 2','potato race','game 4','game 5'],
            GameHistory: ['old-game 1','old-game 2','old-game 3'],
            AllPlayers: ['gamePlayer1','gamePlayer2','gamePlayer3','otherUser1','otherUser2','otherUser3']

        }

        return (
            <div className="dashboard">
              <HeaderBar/>
              <div className="dashboard-username">
                Username: {this.props.username}
              </div>
              <SideBar gameInfo={tempSideBarState}/>
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