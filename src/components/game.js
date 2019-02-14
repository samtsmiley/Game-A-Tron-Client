import React from 'react';
import {connect} from 'react-redux';
import  GameDescription  from './gameDescription';
import { GameRules } from './gameRules';
import { GameScoreOpportunities } from './gameScoreOpportunities';
import { GameProgressBar } from './gameProgressBar';
import { GameLeaderboard } from './gameLeaderboard';
import { GameCreatePost } from './gameCreatePost';
import { GamePostsList } from './GamePostsList';

import {joinGame} from '../actions/game'




export class Game extends React.Component {
    componentDidMount() {
      // this.props.dispatch(fetchGameById(this.props.gameId)) will add this to sidebar 
      // this.props.dispatch(fetchGameById('5c658988c61a4c4c2c1a31cf'))

    }
    
    joinGameButton(){
      const participants = {userId:{this.props.id}, }
      this.props.dispatch(joinGame(participants))
    }

    render() {
      return (
        <div className="game">
          <h2>Game Title</h2>
          <button onClick={() => this.joinGameButton()}>Join Game</button>
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
      id:state.auth.cur
    };
};

export default connect(mapStateToProps)(Game);