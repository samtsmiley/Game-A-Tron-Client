import React from 'react';
import {connect} from 'react-redux';
import  GameDescription  from './gameDescription';
import GameRules from './gameRules';
import  GameScoreOpportunities  from './gameScoreOpportunities';
import GameProgressBar from './gameProgressBar';
import GameLeaderboard from './gameLeaderboard';
// import  GameCreatePost  from './gameCreatePost';
import  CreatePostForm  from './createPostForm';

import  GamePostsList  from './GamePostsList';
import {joinGame} from '../actions/game'
import './gameDashboard.css';

export class Game extends React.Component {
    componentDidMount() {
    }
    
    joinGameButton(){
      this.props.dispatch(joinGame(`${this.props.gameId}`,`${this.props.userName}`))
    }

    render() {
  //     const amIAParticipant = this.props.participants.some((participant) => {
  //   return participant.userId.id === this.props.userId
  // })
      return (
        <div className="game card">
          <h1>{this.props.gameName}</h1>
          <div className="game-btn-wrap">
            {this.props.amIAParticipant 
              ? <p>You are playing this game</p> 
              : <button type="button" onClick={() => this.joinGameButton()} className="joinbtn">Join Game</button>}
          </div>
          
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
  // console.log('the participants:', state.game.data.participants)
  // console.log('the current user id:',state.auth.currentUser.id,)
  // console.log('<<<',state.game.data.participants.some((participant) => {
  //   return participant.userId.id === state.auth.currentUser.id
  // }))
  // const amIAParticipant = state.game.data.participants.some((participant) => {
  //   return participant.userId.id === state.auth.currentUser.id
  // })
    return {
      userId:state.auth.currentUser.id,
      gameName:state.game.data.name,
      userName:state.auth.currentUser.username,
      gameId:state.game.data.id,
      // participants: state.game.data.participants
      amIAParticipant: state.game.data.participants.some((participant) => {
        return participant.userId.id === state.auth.currentUser.id })     
     
    };
};

export default connect(mapStateToProps)(Game);