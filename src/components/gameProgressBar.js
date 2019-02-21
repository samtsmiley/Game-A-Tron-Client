import React from 'react';
import {connect} from 'react-redux';
import { Line, Circle } from 'rc-progress';
import { findScore } from './components-utils';

//requires doing this --> npm install --save rc-progress

export class GameProgressBar extends React.Component {
    componentDidMount() {
    }    

    render() {

        console.log('progress bar state: ', this.props.allGameData);
        
        let currentUserPercentProgress = 0;
        let allUsersPercentProgress = 0;
        let currentScore = this.props.score;
        let maxScore = this.props.endScore;
 
        if(currentScore && maxScore){
            currentUserPercentProgress = ((currentScore/maxScore) * 100).toFixed(2);
        }

        let sumScore = 0;

        this.props.allGameData.participants.map(item =>{

            return sumScore = sumScore + item.score;

        });
 
        if(sumScore && maxScore){
            allUsersPercentProgress = ((sumScore/maxScore) * 100).toFixed(2);
        }

        let barContainerStyle = {
            width: '70%',
            height: '70%',
            display: 'inline-block',
        };

      return (
        <div >
            <h3>Your progress so far is: {currentUserPercentProgress}% </h3>
            <div style={barContainerStyle}>
            <Line percent={currentUserPercentProgress}
                  strokeWidth="4"
                  trailWidth="3.75"
                  trailColor="#bebec8"
                  strokeColor="#4aa84a"
                  strokeLinecap='round'/>
            <h3>Overall game progress so far is: {allUsersPercentProgress}% </h3>
            <Line percent={allUsersPercentProgress}
                  strokeWidth="4"
                  trailWidth="3.75"
                  trailColor="#bebec8"
                  strokeColor="#000080"
                  strokeLinecap='round'/>
            {/* <Circle percent="0" strokeWidth="4" trailWidth="3.75" trailColor="#beb4b4" strokeColor="#4aa84a" strokeLinecap='round'/> */}
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    
   
    const { userId } = state.auth.currentUser.id;
    const { scores, participants } = state.game.data;
    // const score = participants.length === 0
    //     ? 0
    //     : findScore(participants, userId); 
 
    return {
        allGameData: state.game.data,
        score: 0,
        scores,
        endScore: 0,//<-- need this to be set to the actual endScore!
        userId 
    };
    
};

export default connect(mapStateToProps)(GameProgressBar);