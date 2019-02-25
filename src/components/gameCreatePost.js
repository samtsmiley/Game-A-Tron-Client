import React from 'react';
import {connect} from 'react-redux';
import {postPost} from '../actions/post'
import {updateScore} from '../actions/game';
import {findScore} from './components-utils';

//export as function not class
export class GameCreatePost extends React.Component {
    componentDidMount() {
    }    

    render() {
        const{ dispatch, gameId, userId, score, scoreOpps } = this.props;
        const scores = scoreOpps.map((item,index) => {
            const { points, description } = item;
            return (<li className="scoreName" key={index}>    
            <p className="gameButton" onClick={() =>{
                dispatch(postPost({description, gameId, value:points }));
                dispatch(updateScore(gameId, {userId, score:score + points}));
             }}>
           {description}
             </p> 
             <p>Points: {points}</p> 
         </li>)
        }
     )

      return (
        <div className="gameCreatePost">
        <h3>Post a Score</h3>
            <ul>
                {scores}
            </ul>
        <button>ADD SCORE PHOTO</button>
        </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('>>>>>',state)
    const { participants, scores, id } = state.game.data;
    const userId = state.auth.currentUser.id;
    const score = participants.length === 0 
        ? 0  
        : findScore(participants, userId);
    
    return {
        scoreOpps: scores,
        gameId: id,
        userId,
        score
    };
};

export default connect(mapStateToProps)(GameCreatePost);