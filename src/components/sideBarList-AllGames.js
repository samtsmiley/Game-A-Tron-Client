import React from 'react';
import '../App.css';

export default function SideBarListAllMyGames(props) {
 
    let allGamesList = props.gameInfo.AllGames.map((game,index) => {
      
      return(
       
      <li key={index}>
        <button >{game}</button>
      </li>

      );

    }); 

    return (
      <div>
        <ul className="sidebar-lists">
          {allGamesList}
        </ul>
      </div>
    )

};