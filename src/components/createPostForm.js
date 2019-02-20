import React from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
// import Input from './input';
// import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './createPostForm.css'
import {postPost} from '../actions/post'
import {updateScore} from '../actions/game';



export class CreatePostForm extends React.Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
            };
            this.showDropdownMenu = this.showDropdownMenu.bind(this);
            this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
          
          };

          showDropdownMenu(event) {
            event.preventDefault();
            this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
            });
          }
        
          hideDropdownMenu() {
            this.setState({ displayMenu: false }, () => {
              document.removeEventListener('click', this.hideDropdownMenu);
            });
        
          }
            
           
    render() {
        const scores = this.props.scoreOpps.map(item =>
            <li className="scoreName" key={item.description}>    
            <p className="gameButton" onClick={() => {
                this.props.dispatch(postPost({description:item.description, gameId:this.props.gameId, value:item.points }));
                this.props.dispatch(updateScore(this.props.gameId, {userId: this.props.userId, score: this.props.score + item.points}));
             }}>
           I {item.description} for {item.points} points.
             </p> 
             {/* <p>Points: {item.points}</p>  */}
         </li>
     )


    return (
        <div  className="sdropdown" >
         <div className="sbutton" onClick={this.showDropdownMenu}> Post A Score </div>

          { this.state.displayMenu ? (
          <ul className='sul'>
       {scores}
          </ul>):(null)}

       </div>

    );
  }
}
const mapStateToProps = state => {
    // console.log('>>>>>',state)
    let score;
    if (state.game.data.participants.length === 0) score = 0;
    else {
      // console.log(state.game.data.participants.find(participant => participant.userId === state.auth.currentUser.id))
      score = state.game.data.participants.find(participant => participant.userId.id === state.auth.currentUser.id).score
    }
      return {
        scoreOpps: state.game.data.scores,
        gameId: state.game.data.id,
        userId: state.auth.currentUser.id,
        score
    };
};

export default connect(mapStateToProps)(CreatePostForm);
