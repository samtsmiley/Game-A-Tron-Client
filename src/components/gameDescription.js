import React from 'react';
import {connect} from 'react-redux';

export class GameDescription extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameDescription subcard">
        <h3>About this Game</h3>
        <p>{this.props.gameDesc}</p>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameDesc:state.game.data.description
    };
};

export default connect(mapStateToProps)(GameDescription);