import React from 'react';
import {connect} from 'react-redux';
import GameLeaderboardListPlayers from './gameLeaderboardListPlayers';
import './gameLeaderboard.css'

//this needs to the game based on id from state:
//then participants
//     {
//        userId:
//        score:
//                  }
//then find user name based on userId...
//OR
//...if endpoint provides the name then that way will be better...

export class GameLeaderboard extends React.Component {
    componentDidMount() {
    }    

    render() {

    if(this.props.selectedGame){console.log('GAME DATA: ',this.props.selectedGame.participants);}
    //console.log('username? ',this.props.selectedGame.participants[0].userId.username); 

  console.log('score? ',this.props.selectedGame.participants[0].score);

      return (
        <div >
            <h3>Game Leaderboard: </h3>
            <GameLeaderboardListPlayers gameParticipants={this.props.gameParticipants}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedGame: state.game.data,
        gameParticipants: state.game.data.participants
 
    };
};

export default connect(mapStateToProps)(GameLeaderboard);