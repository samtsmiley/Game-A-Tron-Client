import React from 'react';
import {connect} from 'react-redux';
import  GameDescription  from './gameDescription';
import GameRules from './gameRules';
import  GameScoreOpportunities  from './gameScoreOpportunities';
import GameProgressBar from './gameProgressBar';
import GameLeaderboard from './gameLeaderboard';
// import  GameCreatePost  from './gameCreatePost';
import  CreatePostForm  from './createPostForm';

import { GamePostsList } from './GamePostsList';
import {joinGame} from '../actions/game'
import './gameDashboard.css';

export class Game extends React.Component {
    componentDidMount() {
    }
    
    joinGameButton(){
      this.props.dispatch(joinGame(`${this.props.gameId}`))
    }

    render() {
      return (
        <div className="game">
          <h1>{this.props.gameName}</h1>
          <button onClick={() => this.joinGameButton()}>Join Game</button>
        <GameDescription/>
        <GameRules/>
        <GameScoreOpportunities/>
        <GameProgressBar/>
        <GameLeaderboard/>
        {/* <GameCreatePost/> */}
        <CreatePostForm/>        
        <GamePostsList/>
        </div>
        );
    }
}

const mapStateToProps = state => {
  //  console.log(state)
    return {
      userId:state.auth.currentUser.id,
      gameName:state.game.data.name,
      gameId:state.game.data.id     
    };
};

export default connect(mapStateToProps)(Game);