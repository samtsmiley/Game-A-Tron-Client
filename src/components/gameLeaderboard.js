import React from 'react';
import {connect} from 'react-redux';
import GameLeaderboardListPlayers from './gameLeaderboardListPlayers';
import './gameLeaderboard.css'
 
export class GameLeaderboard extends React.Component {
    componentDidMount() {
    }    

    render() {

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