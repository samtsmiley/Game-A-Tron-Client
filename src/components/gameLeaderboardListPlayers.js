import React from 'react';
import './gameLeaderboard.css';


export default function GameLeaderboardListPlayers(props) {

// > Access the players in current game selected
// > Determine rank based on player score
// > Sort player from Highest to Lowest
// > Return Sorted list
// > For First, Second, Third highlight
// > List all other players after with rank #

//console.log('GAME DATA @ LIST: ',props.gameParticipants);

let rankedPlayersListItem = <p>No Players Yet</p>;  

//If the participants is available to read...
if(props.gameParticipants) {

  //If the participants array is populated with at least one player...
  if(props.gameParticipants.length !== 0){
 
  //console.log('HERE at player list', props.gameParticipants);

  //test array...
  let testScores = [
    {score: 55, username: 'player name 11'},
    {score: 15, username: 'player name 3'},
    {score: 3, username: 'player name 46'},
    {score: 72, username: 'player name 5'},
  ];

  //note this is based the structure of the participants array as:
  //[{score:55,username:'name'},{score:11,username:'name'},etc...

  //this function sorts the scores in the player objects based on the key: score...
  function sortScores(array, key){

    return array.sort((a, b) => {
      return a[key]-b[key];
    });

  }

  const playerArrSorted = sortScores(testScores,'score');
 
  // console.log('playerArrSorted ',playerArrSorted);
   
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

    //My need this structure...still in progress   
    // const playerName = player.userId.username
    //   ? player.userId.username
    //   : null

    const playerName = player.username;

    return (
      <li key={index}>
        <button>{content} {playerName} &nbsp;&nbsp; Score: {player.score}</button>
        {bar}
      </li> 
    );
    
  }); 

  }//inner

}//outer

  return (

    <div>
      <ul id='gameLeaderboardListPlayers'>
       {rankedPlayersListItem}
      </ul>
    </div>

  )
 
};