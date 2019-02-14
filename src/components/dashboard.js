import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import HeaderBar from './headerBar';
import NewGame  from './newGame';
import SideBar from './sideBar';
import GameDashboard  from './gameDashboard';
import FindGame from './findGame';
import Profile from './profile';




export class Dashboard extends React.Component {



    componentDidMount() {
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
							{/* show all things for now uncomment as componont gets added*/}
							<GameDashboard />
							<NewGame />
							<Profile />
							<FindGame />
							{/* <Timeline /> */}



							{/* 
							enable this code when we have the sidebar reducer
							{this.props.showProfile && <Profile/>}
							{this.props.showFindGame && <FindGame/>}
							{this.props.showNewGame && <NewGame/>}
							{this.props.showOneGame && <GameDashboard/>}
							{this.props.showAllPosts && <AllPosts/>} */}


							<div className="dashboard-username">
                Username: {this.props.username}
              </div>
              
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
         // update when we can
        // showProfile: state.
        // showFindGame: state.
        // showNewGame: state.
        // showOneGame: state.
		// showAllPosts: state.
			    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
