import React from 'react';
import {connect} from 'react-redux';

export class GameDescription extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameDescription">
          <p>Game Description:{this.props.desc}</p>
        </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        // desc : state.game.data.description
    };
};

export default connect(mapStateToProps)(GameDescription);