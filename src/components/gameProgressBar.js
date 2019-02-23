import React from 'react';
import {connect} from 'react-redux';
import { Line, Circle } from 'rc-progress';
import { findScore } from './components-utils';

//requires doing this --> npm install --save rc-progress

export class GameProgressBar extends React.Component {
     
    render() {
  
        let currentUserPercentProgress = 0;
        let allUsersPercentProgress = 0;
        let maxScore = this.props.allGameData.endScore; 
        let currentUserId = this.props.userId;
        let currentUserScore = 0;

        //smelly but working...
        const findCurrentUserScore = this.props.allGameData.participants.map((user,index) => {
  
          if(this.props.allGameData.participants[index].userId.id === currentUserId){
                     
            if(parseInt(this.props.allGameData.participants[index].score)){
                  
                currentUserScore = parseInt(this.props.allGameData.participants[index].score);
            }   
 
            return 0;

          } 
          else{

            return 0;

          }
      
        });
  
        if(currentUserScore && maxScore){
            currentUserPercentProgress = ((currentUserScore/maxScore) * 100).toFixed(2);
        }

        let sumScore = 0;
        let playerCount = 0;

        //Add up all the scores and find the current number of players...
        this.props.allGameData.participants.map(item =>{

            return (sumScore = sumScore + item.score, playerCount = playerCount + 1);
 
        });
 
        if(sumScore && maxScore){
            allUsersPercentProgress = ((sumScore/maxScore) * 100).toFixed(2);
        }

        let barContainerStyle = {
            width: '70%',
            height: '70%',
            display: 'inline-block',
        };
 
        const numberOfPlayerContent = (
            playerCount === 0 ? 'There are currently no active players' :
            playerCount === 1 ? `There is currently ${playerCount} active player` :
            playerCount = `There are currently ${playerCount} active players` 
        );
  
      return (
        <div className="card">
            <h3>{numberOfPlayerContent}</h3>
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
     
    const { scores, participants } = state.game.data;
      
    return {
        allGameData: state.game.data,
        participants: participants, 
        scores, 
        userId: state.auth.currentUser.id 
    };
    
};

export default connect(mapStateToProps)(GameProgressBar);