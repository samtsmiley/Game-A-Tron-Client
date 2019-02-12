
import React from 'react';
import '../App.css';

export default function SideBarListAllPlayers(props) {
 
    let allPlayersList = props.gameInfo.AllPlayers.map((player,index) => {
      
      return(
       
      <li key={index}>
        <button>{player}</button>
      </li>

      );

    }); 
  
    return (
      <div >
        <ul className="SideBar-lists" id='allPlayersList'>
          {allPlayersList}
        </ul>
      </div>
    )

};