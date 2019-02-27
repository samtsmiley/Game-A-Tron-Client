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
let secondPlace = null;
let thirdPlace = null;  
let baseColor = 0;//35;//parseInt(256 * Math.random());//225
let pageTitle = <h2>Game Leaderboard: </h2>
const theEndScore = parseInt(props.gameEndScore);
  
let prizeMenu = null;
 
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
      ? null
      : null

     
    const playerPercentProgress = ((parseInt(props.gameParticipants[index].score)/theEndScore) * 100).toFixed(2);   

    function randomHSL(){
      return `hsl(${baseColor}, ${(playerArrSorted.length/index) * 30}%, 50%,1)`;
    }

    const randomColor = index === 0
      ? `hsl(${baseColor},100%, 50%,1)` 
      : randomHSL()
     
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
        <p style={barContainerStyle}>{content} {playerName} &nbsp;&nbsp;Score: {playerScore}&nbsp;{playerPercentProgress}% of {props.gameEndScore} possible points{progressBar}</p>
        {bar}
      </li> 
    );
    
  }); 
   
  //Logic for winner -- game over
  if(playerArrSorted[0].score >= props.selectedGame.endScore){
 
    const imagePath = props.prizeImageOptions;
    const imageSetIndex = parseInt(props.prizeType);//where to find the set of images in the images array...

    pageTitle = <h1>The Winner's Circle</h1>;

    //2nd place
    if(playerArrSorted.length > 1){

      secondPlace = 
      <div><img src={imagePath[imageSetIndex].prize_2} width="110" alt=''/>
      <h2>Second Place</h2>
      <h2>Goes to {props.gameParticipants[1].userId.username}<br/> with a super score of {playerArrSorted[1].score} points!!</h2>
      </div>

    }

    //3rd place
    if(playerArrSorted.length > 2){

      thirdPlace = 
      <div><img src={imagePath[imageSetIndex].prize_3} width="100" alt=''/>
      <h2>Third Place</h2>
      <h2>Goes to {props.gameParticipants[2].userId.username}<br/> with a great score of {playerArrSorted[2].score} points!</h2>
      </div>

    }

    //1st place
    theWinner = <div><h2>This Game Has Been Won!</h2> 
    <img src={imagePath[imageSetIndex].prize_1} width="120" alt=''/>
    <h1>First Place</h1>
    <h1>Goes to {props.gameParticipants[0].userId.username}!<br/> with an awesome score of {playerArrSorted[0].score} points!!!</h1>
    {secondPlace}
    {thirdPlace}
    </div>
     
    let prizeListItems = imagePath.map((item,index) => {

      return(

        <li className="scoreName" key={index}>    
         <input type='radio'
            name={item.setIndex}
            checked={props.prizeType === index}
            className="gameButton"
            onChange={(e)=>{ 
             props.selectPrize(e.currentTarget.name)
            }} >
      
        </input> 
         <label htmlFor="public">Select {item.setName} Style</label>
       </li>

      )
 
    })

    //prize selection...
    prizeMenu = <div>Select Prize Style: 
     <ul>
       {prizeListItems}
     </ul>
     
     </div>;
   
  }

} 
 
  return (

    <div>
       {pageTitle}
      <div>{theWinner}</div>
      <br/>
       {prizeMenu}
      <br/>
      <ul id='gameLeaderboardListPlayers'>
       {rankedPlayersListItem} 
      </ul>
    </div>

  )
 
};