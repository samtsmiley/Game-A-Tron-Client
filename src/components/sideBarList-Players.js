
import React from 'react';
import '../App.css';

export default function SideBarListPlayers(props) {
 
    let playersList = props.gameInfo.Players.map((player,index) => {
      
      return(
       
      <li key={index}>
        <button>{player}</button>
      </li>

      );

    }); 
  
    return (
      <div>
        <ul className="SideBar-lists" id='playersList'>
          {playersList}
        </ul>
      </div>
    )

};