import React from 'react';
import {connect} from 'react-redux';
import {postPost} from '../actions/post'
import  CreatePostForm  from './createPostForm';
import {updateScore} from '../actions/game';

export class GameCreatePost extends React.Component {
    componentDidMount() {
    }    

    render() {
        const scores = this.props.scoreOpps.map(item =>
            <li className="scoreName" key={item.description}>    
            <p className="gameButton" onClick={() =>{
                console.log()
                 this.props.dispatch(postPost({description:item.description, gameId:this.props.gameId, value:item.points }));
                 this.props.dispatch(updateScore(this.props.gameId, {userId: this.props.userId, score:this.props.score + item.points}));
             }}>
           {item.description}
             </p> 
             <p>Points: {item.points}</p> 
         </li>
     )

      return (
        <div className="gameCreatePost">
        <h3>Post a Score</h3>
       <ul>
           {scores}
       </ul>
        </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('>>>>>',state)
    return {
        scoreOpps: state.game.data.scores,
        gameId: state.game.data.id,
        userId: state.auth.currentUser.id,
        score: state.game.data.participants.find(participant => participant.userId.equals(state.auth.currentUser.id)).score
    };
};

export default connect(mapStateToProps)(GameCreatePost);