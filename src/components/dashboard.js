import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import HeaderBar from './headerBar';
import NewGame  from './newGame';
import SideBar from './sideBar';
import GameDashboard  from './gameDashboard';
import FindGame from './findGame';
import Profile from './profile';


import {fetchGameById} from '../actions/game'




export class Dashboard extends React.Component {
    componentDidMount() {
      //this.props.dispatch(fetchGameById())
    }

    

    render() {
        //This is for sidebar testing -- replace with actual state info when available...
        let tempSideBarState = {
 
            CurrentGame: {name: 'potato race'},
            Players:['gamePlayer1','gamePlayer2','gamePlayer3'],
            MyGames:['game 1 id','game 2 id','potato race id'],
            AllGames:['game 1','game 2','potato race','game 4','game 5'],
            GameHistory: ['old-game 1','old-game 2','old-game 3'],
            AllPlayers: ['gamePlayer1','gamePlayer2','gamePlayer3','otherUser1','otherUser2','otherUser3']

        }

        return (
            <div className="dashboard">
                <HeaderBar />
			    <SideBar gameInfo={tempSideBarState} />	
                <section className="main-display">
                    {this.props.showProfile && <Profile/>}
                    {this.props.showFindGame && <FindGame/>}
                    {this.props.showNewGame && <NewGame/>}
                    {this.props.showOneGame && <GameDashboard/>}
                    {/* {this.props.showAllPosts && <Timeline/>} */}
                </section>	
				{/* <div className="dashboard-username">
                Username: {this.props.username}
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showProfile: state.sideBar.showProfile,
        showFindGame: state.sideBar.showFindGame,
        showNewGame: state.sideBar.showNewGame,
        showOneGame: state.sideBar.showOneGame,
		showAllPosts: state.sideBar.showAllPosts
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
