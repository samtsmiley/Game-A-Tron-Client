
import React from 'react';
import '../App.css';

export default function SideBarListMyGames(props) {

  let myGames = null;
 
  console.log('sidebar list: ',props.allMyGames);

  //still need participants to be in the games to compare current user ID with particpants in each game....
  //compare participants ids to match current user and return array of games current user is in...
  //Currently it is showing ALL the games regardless of user ID...

  if(props.allMyGames) {

    myGames = props.allMyGames.map((game,index) => {
        
      //* could add select css here?

      return(
     
        <li key={index}>
          <button value={props.allMyGames[index]} onClick={(e)=> {console.log('>>> ',e.currentTarget.value);props.onSelect(e.currentTarget.value);} }>{game}</button>
        </li>
  
        );

  });


  } else if(myGames === null){

    myGames = 'Loading them in...';

  }
  
    

    return (
      <div>
        <ul className="sidebar-lists">
          {myGames}
        </ul>
      </div>
    )

};