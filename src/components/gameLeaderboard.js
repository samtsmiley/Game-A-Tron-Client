import React from 'react';
import {connect} from 'react-redux';
import GameLeaderboardListPlayers from './gameLeaderboardList-Players';
import '../GameLeaderBoard.css';

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

      let testGamesArray = {
        participants:[{username:'Bob345',userId: 5550111,score:15},{username:'Joe666',userId: 5550110,score:65},{username:'fred111',userId: 5550113,score:25},{username:'staypuff99',userId: 5550118,score:45}],
      };

      return (
        <div className="gameLeaderboard">
            <h3>Game Leaderboard!</h3>
            <p>Current Ranking Based on Scores:</p>
            <GameLeaderboardListPlayers players={testGamesArray}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        games: state.auth.currentUser.games//<--in progress...
    };
};

export default connect(mapStateToProps)(GameLeaderboard);