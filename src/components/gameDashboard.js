import React from 'react';
import {connect} from 'react-redux';
import  GameDescription  from './gameDescription';
import GameRules from './gameRules';
import  GameScoreOpportunities  from './gameScoreOpportunities';
import GameProgressBar from './gameProgressBar';
import GameLeaderboard from './gameLeaderboard';
import  CreatePostForm  from './createPostForm';
import  GamePostsList  from './GamePostsList';
import {joinGame} from '../actions/game'
import './gameDashboard.css';
import { fetchMyGamesRequest } from '../actions/sideBar-actions';

 
export class Game extends React.Component {
    
    joinGameButton(){
      this.props.dispatch(joinGame(`${this.props.gameId}`,`${this.props.userName}`))
      .then(()=>this.props.dispatch(fetchMyGamesRequest(this.props.userId)))
    }

    render() {

      //this hides the post a score button if the game has been won...
      const winnerDetector = this.props.participants.find(item => {
        return item.score >= this.props.endScore
      })

      return (
        <div className="game card">
          <h1>{this.props.gameName}</h1>
          <div className="game-btn-wrap">
          {this.props.userName === 'spectator'
            ? <p>Make an account to join a game and post scores.</p>
            : this.props.amIAParticipant
                ? <p>You are playing this game</p> 
                : !winnerDetector && <button type="button" onClick={() => this.joinGameButton()} 
                className="joinbtn">Join Game
                </button>}
        </div>
          
        <GameDescription/>
        <GameRules/>
        <GameScoreOpportunities/>
        <GameProgressBar/>
        <GameLeaderboard/>
        {this.props.amIAParticipant && !winnerDetector && <CreatePostForm/>}        
        <GamePostsList/>
        
        </div>
        );
    }
}

const mapStateToProps = state => {
 
    return {
      gameData:state.game.data,
      showPostFocus:state.postFocus.showPostWindow,
      userId:state.auth.currentUser.id,
      gameName:state.game.data.name,
      userName:state.auth.currentUser.username,
      gameId:state.game.data.id,
      amIAParticipant: state.game.data.participants.some((participant) => {
        return participant.userId.id === state.auth.currentUser.id }),
      participants: state.game.data.participants,
      endScore:state.game.data.endScore      
     
    };
};

export default connect(mapStateToProps)(Game);