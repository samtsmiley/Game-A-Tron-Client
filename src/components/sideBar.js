import React from 'react';
import SideBarListPlayers from './sideBarList-Players';
import SideBarListMyGames from './sideBarList-MyGames';
import SideBarListMyGameHistory from './sideBarList-MyGameHistory';
import SideBarListAllGames from './sideBarList-AllGames';
import SideBarListAllPlayers from './sideBarList-AllPlayers';
 
import '../App.css';
  
export class SideBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      showPlayers:false,
      showMyGames:false,
      showMyHistory:false,
      showAllPlayers:false,
      showAllGames:false

    }
 
  }

  showPlayers(){

    let newMode;

    if(this.state.showPlayers){ 
      newMode = false;
    } else{
      newMode = true;
    }

    this.setState({
      showPlayers:newMode,
      showMyGames:false,
      showMyHistory:false,
      showAllPlayers:false,
      showAllGames:false
    })

  }

  showMyGames(){

    let newMode;

    if(this.state.showMyGames){ 
      newMode = false;
    } else{
      newMode = true;
    }

    this.setState({
      showPlayers:false,
      showMyGames:newMode,
      showMyHistory:false,
      showAllPlayers:false,
      showAllGames:false
    })

  }

  showAllGames(){

    let newMode;

    if(this.state.showAllGames){ 
      newMode = false;
    } else{
      newMode = true;
    }

    this.setState({
      showPlayers:false,
      showMyGames:false,
      showMyHistory:false,
      showAllPlayers:false,
      showAllGames:newMode
    })

  }
 
  showGameHistory(){

    let newMode;

    if(this.state.showMyHistory){ 
      newMode = false;
    } else{
      newMode = true;
    }

    this.setState({
      showPlayers:false,
      showMyGames:false,
      showMyHistory:newMode,
      showAllPlayers:false,
      showAllGames:false
    })

  }

  showAllPlayers(){

    let newMode;

    if(this.state.showAllPlayers){ 
      newMode = false;
    } else{
      newMode = true;
    }

    this.setState({
      showPlayers:false, 
      showMyGames:false,
      showMyHistory:false,
      showAllPlayers:newMode,
      showAllGames:false

    })

  }


  render() {

    let displayPlayers=null;
    let displayMyGames=null;
    let displayMyHistory=null;
    let displayAllPlayers=null;
    let displayAllGames=null;

    if(this.state.showPlayers){displayPlayers = <SideBarListPlayers gameInfo={this.props.gameInfo}/>}
    if(this.state.showMyGames){displayMyGames = <SideBarListMyGames gameInfo={this.props.gameInfo}/>}
    if(this.state.showMyHistory){displayMyHistory = <SideBarListMyGameHistory gameInfo={this.props.gameInfo}/>}
    if(this.state.showAllPlayers){displayAllPlayers = <SideBarListAllPlayers gameInfo={this.props.gameInfo}/>}
    if(this.state.showAllGames){displayAllGames = <SideBarListAllGames gameInfo={this.props.gameInfo}/>}

    return(
      <div className="SideBar" >
        <h3>Side Bar!</h3>
        <p>user icon avatar? here...</p>
        <br/>
        <p>CURRENT GAME:</p>
        <button>{this.props.gameInfo.CurrentGame.name}</button><br/>
        <button onClick={()=>this.showPlayers()}>PLAYERS IN THE CURRENT GAME</button>
        {displayPlayers}
        <hr/>
        <button onClick={()=>this.showMyGames()}>ALL THE GAMES I AM PLAYING</button>
        {displayMyGames}
        <button onClick={()=>this.showGameHistory()}>MY GAME HISTORY</button>
        {displayMyHistory}
        <hr/>
        <button onClick={()=>this.showAllPlayers()}>ALL PLAYERS</button>
        {displayAllPlayers}
        <button onClick={()=>this.showAllGames()}>ALL THE GAMES</button>
        {displayAllGames}
        <hr/>
        <br/>
        <button>CREATE NEW GAME</button>
      </div>
    );

  }

}

export default SideBar;