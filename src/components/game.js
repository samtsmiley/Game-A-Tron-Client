import React from 'react';
import {connect} from 'react-redux';
import { GameDescription } from './gameDescription';
import { GameRules } from './gameRules';
import { GameScoreOpportunities } from './gameScoreOpportunities';
import { GameProgressBar } from './gameProgressBar';
import { GameLeaderboard } from './gameLeaderboard';
import { GameCreatePost } from './gameCreatePost';
import { GamePostsList } from './GamePostsList';


export class Game extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="game">
          <h2>Game Title</h2>
          <button>Join Game</button>
        <GameDescription/>
        <GameRules/>
        <GameScoreOpportunities/>
        <GameProgressBar/>
        <GameLeaderboard/>
        <GameCreatePost/>
        <GamePostsList/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(Game);