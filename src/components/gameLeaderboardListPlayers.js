import React from 'react';
import './gameLeaderboard.css';


export default function GameLeaderboardListPlayers(props) {

//Access the players in current game selected

//Determine rank based on player score

//Sort player from Highest ot Lowest

//Return Sorted list

//For First, Second, Third highlight

//List all other players after with rank#

console.log('GAME DATA @ LIST: ',props.gameParticipants);

let rankedPlayersListItem = <p>No Players Yet</p>;  

if(props.gameParticipants) {

//REF
//console.log('username? ',props.selectedGame.participants[0].userId.username); 

//console.log('score? ',props.selectedGame.participants[0].score);
 
if(props.gameParticipants.length !== 0){

///  

console.log('HERE at player list', props.gameParticipants);

//note this is based on an object structure of participants[{score:55},{score:11},{score:22}] etc...
let playerArrSorted = quickSort(props.gameParticipants);

///
//-->> Quick Sort stuff -->>
   
    let count = 0;
  
    function quickSort(array, start=0, end=array.length){
  //finished

  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;

    }

    function swap(array, i, j){
  const tmp = array[i].score;
  array[i].score = array[j].score;
  array[j].score = tmp;
    }

    function partition(array, start, end) {
  //let count = 0;
  const pivot = array[end - 1].score;//5
  let j = start;//0
  for (let i=start; i<end - 1; i++) {
    count = count + 1;
    if (array[i].score >= pivot) { 
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  
  return j;
    }

  //-->> Quick Sort stuff
///


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
      ? <hr/>
      : ''

    return (
      <li key={index}>
        <button>{content} {player.userId.username} &nbsp;&nbsp; Score: {player.score}</button>
        {bar}
      </li> 
    );
    // if(index < 3){

    //   //let playerName =  // access the users list by id

      
    //   let bar = null;

    //   if(index === 0){placer='1st'}
    //   if(index === 1){placer='2nd'}
    //   if(index === 2){
    //     placer='3rd';
    //     bar = <hr/>;
    //   }

    //   //first, second, third
      
    // }
    // else{
      
    //   //everything past 3rd place...
    //   return(
         
    //     <li key={index}>
    //       <button>{player.userId.username} &nbsp;&nbsp; Score: {player.score}</button>
    //     </li>
    //   );
    // }
  }); 


  ///

}//outer 2
 

}//outer

  return (

    <div>
      <ul id='gameLeaderboardListPlayers'>
       {rankedPlayersListItem}
      </ul>
    </div>

  )
 
};