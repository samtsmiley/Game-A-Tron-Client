import React from 'react';
import '../App.css';

export default function SideBarListMyGameHistory(props) {
  
    let gameHistoryList = props.gameInfo.GameHistory.map((game,index) => {
      
      return(
       
      <li key={index}>
        <button>{game}</button>
      </li>

      );

    }); 
  
    return (
      <div >
        <ul className="SideBar-lists" id='myGameHistoryList'>
          {gameHistoryList}
        </ul>
      </div>
    )

};