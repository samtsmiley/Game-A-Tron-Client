
import React from 'react';
import '../App.css';

export default function SideBarListMyGames(props) {


  
    let myGames = props.allMyGames.map((name,index) => {
        
        //* could add select css here?

        return(
       
          <li key={index}>
            <button value={props.allMyGames[index]} onClick={(e)=> props.onSelect(e.currentTarget.value)}>{name}</button>
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