import React from 'react';
import {connect} from 'react-redux';
import GameRulesList from './gameRulesList';

export class GameRules extends React.Component {
    componentDidMount() {
    }    

    render() {

    let testSelectedGame = {
            rules:[{description:'this is a rule...'},{description:'this is a another rule...'},{description:'this is yet another rule...'},{description:'this is, yes, another awesome rule...'}],
          };  

      return (
        <div className="gameRules">
        <h3>{this.props.selectedGame.name}</h3>
        <h3>Game Rules!</h3>
        <GameRulesList selectedGameRules={this.props.selectedGame.rules}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedGame:state.game.data
    };
};

export default connect(mapStateToProps)(GameRules);