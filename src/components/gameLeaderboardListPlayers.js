import React from 'react';
import './gameLeaderboard.css';
import { Line } from 'rc-progress';


export default function GameLeaderboardListPlayers(props) {

// > Access the players in current game selected
// > Determine rank based on player score
// > Sort player from Highest to Lowest
// > Return Sorted list
// > For First, Second, Third highlight
// > List all other players after with rank #
//Logic to determine if game is over and show end of game info

// console.log('GAME DATA @ LIST: ',props.gameParticipants);

let rankedPlayersListItem = <p>No Players Yet</p>;  
let theWinner = null;  
let baseColor = 0;//35;//parseInt(256 * Math.random());//225
 
//If the participants array is populated with at least one player...
if(props.gameParticipants.length > 0){
    
  //this function sorts the scores in the player objects based on the key: score...
  function sortByScores(array, key){
    return array.sort((a, b) => {
      return b[key]-a[key];
    });
  }

  const playerArrSorted = sortByScores((props.gameParticipants),'score');
  
  //index 1-3
  rankedPlayersListItem = playerArrSorted.map((player,index) => {
    let placer = {
      0:'1st',
      1:'2nd',
      2:'3rd'
    };

    const content = placer[index]
      ? `${placer[index]} Place: `
      : `Rank: ${index + 1} `

    const bar = index === 2 
      ? <React.Fragment><br/><hr/><br/></React.Fragment>
      : ''

    const playerPercentProgress = ((props.gameParticipants[index].score/props.selectedGame.endScore) * 100).toFixed(2);  

    function randomHSL(){
      return `hsl(${baseColor}, ${(playerArrSorted.length/index) * 30}%, 50%,1)`;
    }

    const randomColor = index === 0
      ? `hsl(${baseColor},100%, 50%,1)` 
      : randomHSL()
       
      
    //}//"#" + (((Math.random()*10).toString(16)) + '000000').slice(2, 8);

    const progressBar = <Line percent={playerPercentProgress}
                          strokeWidth="4"
                          trailWidth="3.75"
                          trailColor="#bebec8"
                          strokeColor={randomColor}
                          strokeLinecap='round'/>
   
    let playerName = props.gameParticipants[index].userId.username;
    let playerScore = props.gameParticipants[index].score;
    let barContainerStyle = {
      width: '50%',
      height: '50%',
      display: 'inline-block',
  };

    return (
      <li key={index}>
        <button style={barContainerStyle}>{content} {playerName} &nbsp;&nbsp;
        Score: {playerScore}&nbsp;{playerPercentProgress}% of {props.selectedGame.endScore} possible points{progressBar}</button>
        {bar}
      </li> 
    );
    
  }); 
  
  //Logic for winner -- game over
  if(playerArrSorted[0].score >= props.gameEndScore){

    theWinner = <div><h2>This Game Has Been Won,</h2> 
    <h1>The Winner Is:</h1> 
    <h1>{props.gameParticipants[0].userId.username}!!! with a score of {playerArrSorted[0].score} points!!!</h1></div>
 
  }

} 
 
  return (

    <div>
      <div>{theWinner}</div>
      <ul id='gameLeaderboardListPlayers'>
       {rankedPlayersListItem} 
      </ul>
    </div>

  )
 
};