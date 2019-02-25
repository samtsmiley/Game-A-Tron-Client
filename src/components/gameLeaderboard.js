import React from 'react';
import {connect} from 'react-redux';
import GameLeaderboardListPlayers from './gameLeaderboardListPlayers';
import './gameLeaderboard.css'
 
export class GameLeaderboard extends React.Component {
    componentDidMount() {
    }    

    render() {

      return (
        <div className="card">
            <h3>Game Leaderboard: </h3>
            <GameLeaderboardListPlayers gameEndScore={this.props.gameEndScore} gameParticipants={this.props.gameParticipants}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedGame: state.game.data,
        gameParticipants: state.game.data.participants,
        gameEndScore: state.game.data.endScore
    };
};

export default connect(mapStateToProps)(GameLeaderboard);