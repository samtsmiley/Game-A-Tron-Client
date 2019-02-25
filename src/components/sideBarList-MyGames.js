
import React from 'react';
import '../App.css';

export default function SideBarListMyGames(props) {

  let myGames = null;
  let theList = <p>No Games Yet</p>;
  
  if(props.allMyGames.games.length !== 0) {
    myGames = props.allMyGames.games.map((game, index) => {
        
      //* could add select css here?

      return(
     
        <li key={index}>
          <button 
          value={props.allMyGames.games[index].id} 
          onClick={(e) => {
            props.onSelect(e.currentTarget.value);
            props.showMyGames();
          }}
          >
          {props.allMyGames.games[index].name}
          </button>
        </li>
  
        );

  });

  }  

    if(myGames){theList = <ul className="sidebar-lists">{myGames}</ul>;}
 

    return (
      <div>
        {theList}
      </div>
    )

};