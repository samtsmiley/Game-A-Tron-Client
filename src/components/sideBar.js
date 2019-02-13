import React from 'react';
import SideBarListCurrentGame from './sideBarList-CurrentGame';
import SideBarListMyGames from './sideBarList-MyGames';
import SideBarListMyGameHistory from './sideBarList-MyGameHistory';
import SideBarListAllGames from './sideBarList-AllGames';
import SideBarListAllPlayers from './sideBarList-AllPlayers';
 
import '../App.css';
  
export class SideBar extends React.Component {

  constructor(props){
    super(props);

    //Local State used for display properties
    this.state = {

      selectedGameName:'',
      selectedGameStyle:'TEST',//for selected text -- styling
      showSelectedGame:false,
      showMyGames:true,
      showMyHistory:false,
      showAllPlayers:false,
      showAllGames:false

    }
 
    this.showSelectedGameClicked = this.showSelectedGameClicked.bind(this);

  }


  showSelectedGameClicked(game){

    let newMode = true;
 
    this.setState({
      selectedGameName:game,
      showSelectedGame:newMode,
      selectedGameStyle:'SideBar-lists-selected',
      showMyGames:true,
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
      showSelectedGame:false,
      showMyGames:true,
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
      showSelectedGame:false,
      showMyGames:true,
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
      showSelectedGame:false,
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
      showSelectedGame:false, 
      showMyGames:true,
      showMyHistory:false,
      showAllPlayers:newMode,
      showAllGames:false

    })

  }


  render() {

    let displaySelectedGame=<p>Select a Game:</p>;
    let displayMyGames=null;
    let displayMyHistory=null;
    let displayAllPlayers=null;
    let displayAllGames=null;
   
    // if(this.state.showSelectedGame){displayCurrentGame = <SideBarListCurrentGame gameInfo={this.props.gameInfo}/>};  
    if(this.state.showSelectedGame){displaySelectedGame = <p>{this.state.selectedGameName}</p>};
    if(this.state.showMyGames){displayMyGames = <SideBarListMyGames gameInfo={this.props.gameInfo} selectedStyle={this.state.selectedGameStyle} onSelect={this.showSelectedGameClicked}/>};
    if(this.state.showMyHistory){displayMyHistory = <SideBarListMyGameHistory gameInfo={this.props.gameInfo}/>};
    if(this.state.showAllPlayers){displayAllPlayers = <SideBarListAllPlayers gameInfo={this.props.gameInfo}/>};
    if(this.state.showAllGames){displayAllGames = <SideBarListAllGames gameInfo={this.props.gameInfo}/>};

    //commented out below extension options & show-hide list options
    return(
      <div className="SideBar" >
        <h3>Side Bar!</h3>
        <p>User Avatar</p>
        <button>USER PROFILE</button>
        <button>CREATE NEW GAME</button>
        <button>FIND A GAME</button>
        <hr/>
        {displaySelectedGame}
        {/* <button onClick={()=>this.showMyGames()}>MY GAMES</button> */}
        {displayMyGames}
        {/* <button onClick={()=>this.showGameHistory()}>MY GAME HISTORY</button>
        {displayMyHistory}
        <hr/>
        <button onClick={()=>this.showAllPlayers()}>ALL PLAYERS</button>
        {displayAllPlayers}
        <button onClick={()=>this.showAllGames()}>ALL THE GAMES</button>
        {displayAllGames} */}
        <hr/>
        <br/>
        
      </div>
    );

  }

}

export default SideBar;