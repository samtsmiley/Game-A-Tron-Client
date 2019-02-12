
import React from 'react';
import '../App.css';

export default function SideBarListMyGames(props) {

    let myGames = props.gameInfo.MyGames.map((game,index) => {
      
      return(
       
      <li key={index}>
        <button>{game}</button>
      </li>

      );

    });

    return (
      <div>
        <ul className="SideBar-lists" id='myGamesList'>
          {myGames}
        </ul>
      </div>
    )

};