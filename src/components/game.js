import React from 'react';
import {connect} from 'react-redux';
import { GameDescription } from './gameDescription';
import { GameRules } from './gameRules';
import { GameScoreOpportunities } from './gameScoreOpportunities';
import { GameProgressBar } from './gameProgressBar';
import { GameLeaderboard } from './gameLeaderboard';
import { GameCreatePost } from './gameCreatePost';

import { GamePostsList } from './GamePostsList';
import {fetchGameById} from '../actions/game'



export class Game extends React.Component {
    componentDidMount() {
      // this.props.dispatch(fetchGameById(this.props.gameId)) will add this to sidebar 
      // this.props.dispatch(fetchGameById('5c64812ec3ab8125c02c0291'))

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
  console.log(state)
    return {
      // gameId: state.sidebar.gameClickedId will wait for sidebar reducer data

    };
};

export default connect(mapStateToProps)(Game);