import React from 'react';
import {connect} from 'react-redux';
import './createPostForm.css'
import PostFocus from './postFocus';
  
export class CreatePostForm extends React.Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
              displayMode: 'noDrop'
            };
            this.showDropdownMenu = this.showDropdownMenu.bind(this);
            this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
          
          };

          showDropdownMenu(event) {
            event.preventDefault();

            this.setState({ displayMode: 'showDrop' }, () => {
            });
          }
        
          hideDropdownMenu() {
            this.setState({ displayMode: 'noDrop' }, () => {
              document.removeEventListener('click', this.hideDropdownMenu);
            });
        
          }
   
           
    render() {

    let postMenu = (
      this.state.displayMode === 'showDrop' 
      ? <PostFocus hideDropdownMenu={this.hideDropdownMenu}/> 
      : this.state.displayMode === 'noDrop'
    );

    let showButton = (
      this.state.displayMode === 'noDrop' 
      ? <button className="postbtn" onClick={this.showDropdownMenu}>Post A Score</button> 
      :null
    );
     
    if(this.state.displayMode === 'showDrop'){
      showButton = null;
    }


    return (
        <div  className="" >
        {postMenu} 
        {showButton}  
       </div>

    );
  }
}
const mapStateToProps = state => {
    let score = 0;
    const currentParticipant = state.game.data.participants.find(participant =>
      participant.userId.id === state.auth.currentUser.id);
    if (currentParticipant) {score = currentParticipant.score;}

      return {
        selectGameData: state.game.data,
        scoreOpps: state.game.data.scores,
        gameId: state.game.data.id,
        userId: state.auth.currentUser.id,
        score
    };
};

export default connect(mapStateToProps)(CreatePostForm);
