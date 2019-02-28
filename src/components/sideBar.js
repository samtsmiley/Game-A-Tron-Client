import React from 'react';
import {connect} from 'react-redux';
//import requiresLogin from './requires-login';
import { fetchMyGamesRequest, showProfile, showAllPosts, showOneGame, showNewGame, showFindGame} from '../actions/sideBar-actions';
import { fetchAllGames, fetchGameById } from '../actions/game';
import SideBarListMyGames from './sideBarList-MyGames';
import './sideBar.css';

// import SideBarListCurrentGame from './sideBarList-CurrentGame';
// import SideBarListMyGameHistory from './sideBarList-MyGameHistory';
// import SideBarListAllGames from './sideBarList-AllGames';
// import SideBarListAllPlayers from './sideBarList-AllPlayers';


  
export class SideBar extends React.Component {
 
  constructor(props){
    super(props);

    //Local State used for display properties
    this.state = {

      myGamesListAvailable: false,
      selectedGameName: '',
      selectedGameStyle: 'TEST',//for selected text -- styling
      showSelectedGame:false,
      showMyGames: false,
      showMyHistory: false,
      showAllPlayers: false,
      showAllGames: false

    }
 
    this.showSelectedGameClicked = this.showSelectedGameClicked.bind(this);
    this.profileClicked = this.profileClicked.bind(this);
    this.createGameClicked = this.createGameClicked.bind(this);
    this.showAllGamesClicked = this.showAllGamesClicked.bind(this);
    this.findGameClicked = this.findGameClicked.bind(this);
    this.showMyGames = this.showMyGames.bind(this);
    
  }


  componentDidMount() {
    this.props.dispatch(fetchAllGames());
    this.props.dispatch(fetchMyGamesRequest(this.props.currentUserId))
     
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

    //Get the selected game info and change view to showOneGame view
    this.props.dispatch(fetchGameById(game_id))
    .then(()=>this.props.dispatch(showOneGame()));
 
    let newMode = true;
 
    this.setState({
      //selectedGameName:game_id,//<<this will come when find a game returns selected game
      showSelectedGame:newMode,
      selectedGameStyle:'SideBar-lists-selected',
      showMyGames:true,
      showMyHistory:false,
      showAllPlayers:false,
      showAllGames:false
    })
  
  }
  

  //Alternate UI-extension stuff
  showMyGames(){
    
    this.setState({
        showMyGames: !this.state.showMyGames,
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
  
    
    
    let displayMyGames=null;
    
    if(this.props.allMyGames.games){
      displayMyGames = <SideBarListMyGames 
      allMyGames={this.props.allMyGames}
      onSelect={this.showSelectedGameClicked} 
      currentUserId={this.props.currentUserId}
      showMyGames={this.showMyGames}
      />
    };
     
    return(
      <div className="side-bar" >
         
        <section className="sidebar-container">
          <button onClick={this.profileClicked}>My Profile</button>
          <button onClick={this.createGameClicked}>Create Game</button>
          <button onClick={this.findGameClicked}>Find Games</button>
          <button onClick={this.showMyGames}> My Games </button>        
        </section>

        {this.state.showMyGames && 
          <section className="sidebar-myGames subcard">
            {displayMyGames}
          </section>
        }
      </div>
    );

  }

}

const mapStateToProps = state =>{
  return { 
    currentUser: state.auth,
    currentUserId: state.auth.currentUser.id,
    currentUsername: state.auth.currentUser.username,
    showProfile: state.sideBar.showProfile,
    showAllPosts: state.sideBar.showAllPosts,
    showNewGame: state.sideBar.showNewGame,
    showFindGame: state.sideBar.showFindGame,
    showOneGame: state.sideBar.showOneGame,
    allMyGames:state.sideBar.myGames,
    allGames: state.game.allGames,
    myGamesLoaded: state.game.loadingComplete 
  }

}

//export default requiresLogin()(connect(mapStateToProps)(SideBar));
export default connect(mapStateToProps)(SideBar);
