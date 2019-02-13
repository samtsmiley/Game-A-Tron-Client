
import React from 'react';
import '../App.css';

export default function SideBarListCurrentGame(props) {
 
    let playersList = props.gameInfo.Players.map((player,index) => {
      
      return(
       
      <li key={index}>
        <button>{player}</button>
      </li>

      );

    }); 
  
    return (
      <div>
        <p>Current Players:</p>
        <ul className="SideBar-lists" id='playersList'>
          {playersList}
        </ul>
      </div>
    )

};