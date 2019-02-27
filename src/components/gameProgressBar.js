import React from 'react';
import {connect} from 'react-redux';
import { Line } from 'rc-progress';
// import { Line, Circle } from 'rc-progress';
// import { findScore } from './components-utils';
//requires doing this --> npm install --save rc-progress

export class GameProgressBar extends React.Component {
     
    render() {
  
        const players = this.props.allGameData.participants;
        let currentUserPercentProgress = 0;
        let allUsersPercentProgress = 0;
        let maxScore = this.props.allGameData.endScore; 
        let currentUserId = this.props.userId;
        let currentUserScore = 0;
        let playerCount = 0;
        let allUsersPercent = 0;
        let topUserPoints = 0;
        

        //if there are participants in the game...
        if(players.length > 0){

            playerCount = players.length;

            const currentUser = players.find(player => {
  
                if(player.userId.id === currentUserId){
      
                  if(parseInt(player.score)){
                        
                       return parseInt(player.score);
                  }   
        
                } 

                return null;
                  
            });
  
            if(currentUser){
                currentUserScore = currentUser.score;
            }

            //make sure both values are not falsey
            if(currentUserScore && maxScore){
                currentUserPercentProgress = ((currentUserScore/maxScore) * 100).toFixed(2);
            }
 
            //this function sorts the scores 
            function sortByScores(array, key){
                return array.sort((a, b) => {
                return b[key]-a[key];
              });
            }
  
            allUsersPercentProgress = sortByScores(this.props.allGameData.participants, 'score');

            allUsersPercent = ((parseInt(allUsersPercentProgress[0].score)/maxScore) * 100).toFixed(2);
            topUserPoints = parseInt(allUsersPercentProgress[0].score);

        }
          
        const barContainerStyle = {
            width: '70%',
            height: '70%',
            display: 'inline-block',
        };
  
        let numberOfPlayersContent = topUserPoints >= this.props.allGameData.endScore 
          ? `There were ${playerCount} players and the game is now over.`
          :  playerCount === 0 ? 'There are currently no active players' 
          :  playerCount === 1 ? `There is currently ${playerCount} active player` 
          :  playerCount = `There are currently ${playerCount} active players`
          
  
      return (

        <div className="subcard">
            <h3>{numberOfPlayersContent}</h3>
            <h3>Your progress so far is: {currentUserPercentProgress}% </h3>
            <div style={barContainerStyle}>
            <Line percent={currentUserPercentProgress}
                  strokeWidth="4"
                  trailWidth="3.75"
                  trailColor="#bebec8"
                  strokeColor="#4aa84a"
                  strokeLinecap='round'/>{currentUserScore} points out of {this.props.allGameData.endScore} possible points
            <h3>Overall game progress so far is: {allUsersPercent}% </h3>
            <Line percent={allUsersPercent}
                  strokeWidth="4"
                  trailWidth="3.75"
                  trailColor="#bebec8"
                  strokeColor="#000080"
                  strokeLinecap='round'/>{topUserPoints} points out of {this.props.allGameData.endScore} possible points
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
     
    const { scores, participants } = state.game.data;
      
    return {
        allGameData: state.game.data,
        participants: participants, 
        scores, 
        userId: state.auth.currentUser.id 
    };
    
};

export default connect(mapStateToProps)(GameProgressBar);