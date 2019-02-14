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
      const participants = {userId:`${this.props.userId}`, score: 0}
      // const participants = [{userId:'5c65896fc61a4c4c2c1a31ce', score: 0}]
      // const gameid = '5c65b6beec24ea1a4cef8e02'
      this.props.dispatch(joinGame(`${this.props.gameId}`, participants))
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
      userId:state.auth.currentUser.id,
      gameId:state.game.data.id
      
    };
};

export default connect(mapStateToProps)(Game);