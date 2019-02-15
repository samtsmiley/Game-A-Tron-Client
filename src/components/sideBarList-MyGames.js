
import React from 'react';
import '../App.css';

export default function SideBarListMyGames(props) {

    let myGames = props.gameInfo.MyGames.map((game_id,index) => {
        
        //* could add select css here?

        return(
       
          <li key={index}>
            <button value={props.gameInfo.MyGames[index]} onClick={(e)=> props.onSelect(e.currentTarget.value)}>{game_id}</button>
          </li>
    
          );
 
    });

    

    return (
      <div>
        <ul className="sidebar-lists">
          {myGames}
        </ul>
      </div>
    )

};