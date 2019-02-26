import React from 'react';
import {connect} from 'react-redux';

export class GameScoreOpportunities extends React.Component {
    componentDidMount() {
    }    

    render() {
        const scoreOppItems = this.props.scoreOpps.map(item =>
            <p className="scoreOppItem" key={item.description}>
               You can {item.description} for {item.points} points.
             </p> 
        )
      return (
        <div className="gameScoreOpportunities subcard">
          <h3>Ways to Score Points</h3>
          <div>
              {scoreOppItems}
          </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('>><>>>', state)
    return {
        scoreOpps: state.game.data.scores,
    };
};

export default connect(mapStateToProps)(GameScoreOpportunities);