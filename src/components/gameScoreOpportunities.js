import React from 'react';
import {connect} from 'react-redux';

export class GameScoreOpportunities extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameScoreOpportunities">
      
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameScoreOpportunities);