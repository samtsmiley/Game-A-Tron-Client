import React from 'react';
import {connect} from 'react-redux';

export class GameLeaderboard extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameLeaderboard">
      
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameLeaderboard);