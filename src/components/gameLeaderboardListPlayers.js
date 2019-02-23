import React from 'react';
import './gameLeaderboard.css';


export default function GameLeaderboardListPlayers(props) {

// > Access the players in current game selected
// > Determine rank based on player score
// > Sort player from Highest to Lowest
// > Return Sorted list
// > For First, Second, Third highlight
// > List all other players after with rank #

console.log('GAME DATA @ LIST: ',props.gameParticipants);

let rankedPlayersListItem = <p>No Players Yet</p>;  


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
   
    let playerName = props.gameParticipants[index].userId.username;
    let playerScore = props.gameParticipants[index].score;

    return (
      <li key={index}>
        <button>{content} {playerName} &nbsp;&nbsp; Score: {playerScore}</button>
        {bar}
      </li> 
    );
    
  }); 

} 



  return (

    <div>
      <ul id='gameLeaderboardListPlayers'>
       {rankedPlayersListItem}
      </ul>
    </div>

  )
 
};