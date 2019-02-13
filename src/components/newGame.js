import React from "react";
import {connect} from 'react-redux';
import NewGameForm from "./newGameForm";
import  {postGame}  from '../actions/game'


export class NewGame extends React.Component {
   

    newGameSubmit (values){
        console.log('new game values', values)
        this.props.dispatch(postGame(values))
    }

  render() {
    return (
        <div className="newGame">
            <h2>Make a New Game</h2>
            <NewGameForm onSubmit={(values)=>this.newGameSubmit(values)} />
        </div>
    );
}
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(NewGame);

