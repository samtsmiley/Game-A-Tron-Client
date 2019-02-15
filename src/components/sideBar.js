import React from 'react';
import {connect} from 'react-redux';
//import requiresLogin from './requires-login';
import {showProfile,showAllPosts,showOneGame,showNewGame,showFindGame} from '../actions/sideBar-actions';
import {fetchGameByIdRequest} from '../actions/game';
import SideBarListCurrentGame from './sideBarList-CurrentGame';
import SideBarListMyGames from './sideBarList-MyGames';
import SideBarListMyGameHistory from './sideBarList-MyGameHistory';
import SideBarListAllGames from './sideBarList-AllGames';
import SideBarListAllPlayers from './sideBarList-AllPlayers';
 import './sideBar.css';

  
export class SideBar extends React.Component {

  //FETCH GAME BY ID
  //import from Sam's get game by id actions
   
  //Check state reflect changes based on state...
  componentDidMount() {


     
  }



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
    this.profileClicked = this.profileClicked.bind(this);
    this.createGameClicked = this.createGameClicked.bind(this);
    this.showAllGamesClicked = this.showAllGamesClicked.bind(this);
    this.findGameClicked = this.findGameClicked.bind(this);
     
    
  }
  
  showAllGamesClicked(){

    //change the state view via action...
    this.props.dispatch(showAllPosts());
    
  }

  profileClicked(){

    //change the state view via action...
    this.props.dispatch(showProfile());
    
  }

  createGameClicked(){
    
    //change the state view via action...
    this.props.dispatch(showNewGame());

  }

  findGameClicked(){
    
    //change the state view via action...
    this.props.dispatch(showFindGame());

  }

  showSelectedGameClicked(game_id){

    let newMode = true;
 
    this.setState({
      selectedGameName:game_id,
      showSelectedGame:newMode,
      selectedGameStyle:'SideBar-lists-selected',
      showMyGames:true,
      showMyHistory:false,
      showAllPlayers:false,
      showAllGames:false
    })

    //change the state view via action...
    this.props.dispatch(showOneGame());

    //GEt the actual game info
    this.props.dispatch(fetchGameByIdRequest(game_id));
 
  }
  

  //Alternate UI-extension stuff
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

    //REF user stuff
    //console.log('user? : ',this.props.currentUser.currentUser.id);

    // let displaySelectedGame=<p>Select a Game:</p>;
    let displayMyGames=null;
    // let displayMyHistory=null;
    // let displayAllPlayers=null;
    // let displayAllGames=null;
   
    // if(this.state.showSelectedGame){displayCurrentGame = <SideBarListCurrentGame gameInfo={this.props.gameInfo}/>};  
    // if(this.state.showSelectedGame){displaySelectedGame = <p>{this.state.selectedGameName}</p>};
    if(this.state.showMyGames){displayMyGames = <SideBarListMyGames gameInfo={this.props.gameInfo} onSelect={this.showSelectedGameClicked}/>};
    // if(this.state.showMyHistory){displayMyHistory = <SideBarListMyGameHistory gameInfo={this.props.gameInfo}/>};
    // if(this.state.showAllPlayers){displayAllPlayers = <SideBarListAllPlayers gameInfo={this.props.gameInfo}/>};
    // if(this.state.showAllGames){displayAllGames = <SideBarListAllGames gameInfo={this.props.gameInfo}/>};

    //commented out below extension options & show-hide list options
    return(
      <div className="side-bar" >

         {/* //////////////////////////////////////////////////////// */}
        {/* //<p> test id = {this.props.currentUser.currentUser.id}</p> */}
        <button onClick={this.profileClicked}>My Profile</button>
        <button onClick={this.createGameClicked}>Create Game</button>
        <button onClick={this.findGameClicked}>Find Games</button>
        <button onClick={this.showAllGamesClicked}>Timeline</button>
        
        <p>My Games</p>
        
        {displayMyGames}
        
        {/* <button onClick={()=>this.showAllPlayers()}>ALL PLAYERS</button> */}
        {/* {displayAllPlayers} */}
        {/* <button onClick={()=>this.showAllGames()}>ALL THE GAMES</button> */}
        {/* {displayAllGames}  */}
        
        <br/>
        
      </div>
    );

  }

}

const mapStateToProps = state =>{
  const {currentUser} = state.auth;

  return { 
    currentUser: state.auth,
    id: currentUser.id,
    showProfile: state.sideBar.showProfile,
    showAllPosts: state.sideBar.showAllPosts,
    showNewGame: state.sideBar.showNewGame,
    showFindGame: state.sideBar.showFindGame,
    showOneGame: state.sideBar.showOneGame,
    games: state.auth.currentUser.games//<--in progress...
  }

}

//export default requiresLogin()(connect(mapStateToProps)(SideBar));
export default connect(mapStateToProps)(SideBar);
