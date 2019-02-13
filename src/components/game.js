import React from 'react';
import {connect} from 'react-redux';
import HeaderBar from './headerBar';


export class Game extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="game">
          <h2>Game Title</h2>
          <button>Join Game</button>
        
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(Game);