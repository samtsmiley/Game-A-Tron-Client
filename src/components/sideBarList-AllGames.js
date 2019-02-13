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
        <ul id='allGamesList' className="SideBar-lists">
          {allGamesList}
        </ul>
      </div>
    )

};