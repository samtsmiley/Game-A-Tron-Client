import React from "react";
import {connect} from 'react-redux';
import NewGameForm from "./newGameForm";
import  {postGame}  from '../actions/game'
import {fetchMyGamesRequest, showOneGame} from '../actions/sideBar-actions';
import './newGameForm.css'

export class NewGame extends React.Component {
    newGameSubmit (values){
        this.props.dispatch(postGame(values))
        .then(()=>this.props.dispatch(fetchMyGamesRequest(this.props.currentUserId)))
        .then(()=>this.props.dispatch(showOneGame()));    
    }

  render() {
    return (
        <div className="newGame card">
            <h2>Create Game</h2>
            {this.props.userName === 'spectator'
            ? <p>Make an account to create a game.</p>
            : <NewGameForm onSubmit={(values)=>this.newGameSubmit(values)} />}
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
    currentUserId: state.auth.currentUser.id,
    userName:state.auth.currentUser.username,
    }
};

export default connect(mapStateToProps)(NewGame);

