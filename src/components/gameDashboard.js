import React from 'react';
import {connect} from 'react-redux';
import  GameDescription  from './gameDescription';
import { GameRules } from './gameRules';
import { GameScoreOpportunities } from './gameScoreOpportunities';
import { GameProgressBar } from './gameProgressBar';
import { GameLeaderboard } from './gameLeaderboard';
import  GameCreatePost  from './gameCreatePost';
import { GamePostsList } from './GamePostsList';
import {joinGame} from '../actions/game'

export class Game extends React.Component {
    componentDidMount() {
    }
    
    joinGameButton(){
      const participants = [{userId:`${this.props.userId}`, score: 0}]
      this.props.dispatch(joinGame(`${this.props.gameId}`, participants))
    }

    render() {
      return (
        <div className="game">
          <h2>{this.props.gameName}</h2>
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
      userId:state.auth.currentUser.id,
      gameName:state.game.data.name,
      gameId:state.game.data.id     
    };
};

export default connect(mapStateToProps)(Game);