import React from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
// import Input from './input';
// import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './createPostForm.css'
import {postPost} from '../actions/post'
import {updateScore} from '../actions/game';
import PostFocus from './postFocus';
import{showPostFocus,exitPostFocus} from '../actions/postFocus'
  
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
 
            //this.props.dispatch(showPostFocus());

            console.log('showDropdownMenu clicked');

            this.setState({ displayMode: 'showDrop' }, () => {
            //document.addEventListener('click', this.hideDropdownMenu);
            });
          }
        
          hideDropdownMenu() {
            this.setState({ displayMode: 'noDrop' }, () => {
              document.removeEventListener('click', this.hideDropdownMenu);
            });
        
          }

          showItemFocus(event) {

            console.log('this is hit!');
 
          }
            
           
    render() {

      //REF
      // console.log('this>>> ',this.props.selectGameData);
       
      //   const scores = this.props.scoreOpps.map(item =>
      //       <li className="scoreName" key={item.description}>    
      //       <button className="gameButton" onClick={() => {

      //         // this.setState({
      //         //   displayMode: 'noDrop'
      //         // });
      //           //these will be on submit button for postFocus window...
      //           //this.props.dispatch(postPost({description:item.description, gameId:this.props.gameId, value:item.points }));
      //           //this.props.dispatch(updateScore(this.props.gameId, {userId: this.props.userId, score: this.props.score + item.points}));
      //        }}>
      //      {/* I {item.description} for {item.points} points. */}
      //        </button> 
      //        {/* <p>Points: {item.points}</p>  */}
      //    </li>
      // )


    let postMenu = (
      this.state.displayMode === 'showDrop' ? <PostFocus hideDropdownMenu={this.hideDropdownMenu}/> : //<ul className='sul'>{scores}</ul>
      this.state.displayMode === 'noDrop'
    );

    let showButton = (
      this.state.displayMode === 'noDrop' ? <div className="sbutton" onClick={this.showDropdownMenu}> Post A Score </div> :
      null
    );
     
    if(this.state.displayMode === 'showDrop'){
      showButton = null;
    }


    return (
        <div  className="sdropdown" >
        {postMenu} 
        {showButton}  
       </div>

    );
  }
}
const mapStateToProps = state => {
    // console.log('>>>>>',state)
     
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
