import React from 'react';
import '../App.css';

export default function GameLeaderboardListPlayers(props) {

  //Access the players in current game selected

  //Determine rank based on player score

  //Sort player from Highest ot Lowest

  //Return Sorted list

  //For First, Second, Third highlight

  //List all other players after

  //Each player name is a button to show that players posts...

//note this is based on an object structure of participants[{score:55},{score:11},{score:22}] etc...
let playerArrSorted = quickSort(props.players.participants);

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
  let rankedPlayersListItem = playerArrSorted.map((player,index) => {
      
    if(index < 3){

      //let playerName =  // access the users list by id

      let placer = '';
      let bar = null;

      if(index === 0){placer='First'}
      if(index === 1){placer='Second'}
      if(index === 2){
        placer='Third';
        bar = <hr/>;
      }

      //first, second, third
      return(
        <li key={index}>
          <button>{placer} Place: {player.username} &nbsp;&nbsp; Score: {player.score}</button>
          {bar}
        </li>
        
      );
    }
    else{
      
      //everything past 3rd place...
      return(
         
        <li key={index}>
          <button>Rank:{index + 1} {player.username} &nbsp;&nbsp; Score: {player.score}</button>
        </li>
      );
    }
  }); 


  return (

    <div>
      <ul id='gameLeaderboardListPlayers' className='gameLeaderboard-lists'>
       {rankedPlayersListItem}
      </ul>
    </div>

  )
 
};