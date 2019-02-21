import React from "react";
import {connect} from 'react-redux';
import NewGameForm from "./newGameForm";
import  {postGame}  from '../actions/game'
import {fetchMyGamesRequest} from '../actions/sideBar-actions';
import './newGameForm.css'

export class NewGame extends React.Component {
   

    newGameSubmit (values){
        // console.log('new game values', values)
        this.props.dispatch(postGame(values))
        .then(()=>this.props.dispatch(fetchMyGamesRequest(this.props.currentUserId)));
        
    }

  render() {
    return (
        <div className="newGame">
            <h2>Create Game</h2>
            <NewGameForm onSubmit={(values)=>this.newGameSubmit(values)} />
        </div>
    );
}
}

const mapStateToProps = state => ({
    currentUserId: state.auth.currentUser.id
});

export default connect(mapStateToProps)(NewGame);

