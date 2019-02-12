import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
// import store from "./store";
// import showResults from "./showResults";
// import FieldArraysForm from "./FieldArraysForm"

// import React from 'react';
import {connect} from 'react-redux';

import NewGameForm from "./newGameForm";

export class NewGame extends React.Component {

  render() {
    return (
        <div className="newGame">
            <h2>Make a New Game</h2>
            <NewGameForm />
        </div>

    );
}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NewGame);
