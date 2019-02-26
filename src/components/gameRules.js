import React from 'react';
import {connect} from 'react-redux';

export class GameRules extends React.Component {
    componentDidMount() {
    }    

    render() {

    let theRulesList = null;

if(this.props.selectedGame) {
  if(this.props.selectedGame.rules.length !== 0){
    let theRules = this.props.selectedGame.rules.map((gameRule,index) => { 
      return(
        <li key={index} className="subcard">  
         <p>Rule #{index + 1}: &nbsp; {this.props.selectedGame.rules[index].description}</p>
        </li>
      );
    });

    if(theRules.length !== 0){
    theRulesList = <ul>{theRules}</ul>;           
    }
  }
}
  return (
    <div className="gameRules subcard">
      <h3>The Game Rules:</h3>
      {theRulesList}
    </div>
    );
}
}

const mapStateToProps = state => {
    return {
        allGames: state.game.allGames,
        selectedGame:state.game.data,
        gameName:state.game.data.name,
        gameRules:state.game.data.rules,
        gameScores:state.game.data.scores
    };
};

export default connect(mapStateToProps)(GameRules);