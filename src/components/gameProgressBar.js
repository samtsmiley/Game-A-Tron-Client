import React from 'react';
import {connect} from 'react-redux';
import { Line, Circle } from 'rc-progress';

//requires doing this --> npm install --save rc-progress

export class GameProgressBar extends React.Component {
    componentDidMount() {
    }    

    render() {
        
        let percentProgress = 0;
        let currentScore = this.props.score;
        let maxScore = this.props.endScore;

        if(currentScore && maxScore){
            percentProgress = ((currentScore/maxScore) * 100).toFixed(2);
        }


        let barContainerStyle = {
            width: '70%',
            height: '70%',
            display: 'inline-block',
        };

      return (
        <div >
            <h3>Your progress so far is {percentProgress}%: </h3>
            <div style={barContainerStyle}>
            <Line percent={percentProgress} strokeWidth="4" trailWidth="3.75" trailColor="#bebec8" strokeColor="#4aa84a" strokeLinecap='round'/>
            {/* <Circle percent="0" strokeWidth="4" trailWidth="3.75" trailColor="#beb4b4" strokeColor="#4aa84a" strokeLinecap='round'/> */}
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    
    let score = 0;
    if(state.game.participants){
        if(state.game.participants.length === 0){score = 0}else{
            score = state.game.data.participants.find(participant => participant.userId.id === state.auth.currentUser.id).score
        }
    }
 
    let endScore = 0;
    if(state.game.data.endScore){endScore = 0}else{
        endScore = state.game.data.endScore
    }
    return {
        score,
        endScore 
    };
    
};

export default connect(mapStateToProps)(GameProgressBar);