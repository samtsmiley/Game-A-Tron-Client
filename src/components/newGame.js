import React from "react";
import {connect} from 'react-redux';
import NewGameForm from "./newGameForm";
import showResults from "./newGameResults";

export class NewGame extends React.Component {

  render() {
    return (
        <div className="newGame">
            <h2>Make a New Game</h2>
            <NewGameForm onSubmit={showResults} />
        </div>
    );
}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NewGame);
