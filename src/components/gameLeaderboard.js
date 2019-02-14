import React from 'react';
import {connect} from 'react-redux';
import GameLeaderboardListPlayers from './gameLeaderboardList-Players';

//this needs the game based on id:
//then participants
//     {
//        userId:
//        score:
//                  }

export class GameLeaderboard extends React.Component {
    componentDidMount() {
    }    

    render() {

      let testGames = {
        participants:[{userId: 5550111,score:15},{userId: 5550110,score:65},{userId: 5550113,score:25},{userId: 5550118,score:45}],
      };

      return (
        <div className="gameLeaderboard">
            <h3>Game Leaderboard!</h3>
            <p>Current Ranking Based on Scores:</p>
            <GameLeaderboardListPlayers players={testGames}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameLeaderboard);