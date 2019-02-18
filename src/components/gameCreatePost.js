import React from 'react';
import {connect} from 'react-redux';
import {postPost} from '../actions/post'
import  CreatePostForm  from './createPostForm';

export class GameCreatePost extends React.Component {
    componentDidMount() {
    }    

    render() {
        const scores = this.props.scoreOpps.map(item =>
            <li className="scoreName" key={item.description}>    
            <p className="gameButton" onClick={() =>{
                console.log()
                 this.props.dispatch(postPost({description:item.description, gameId:this.props.gameId, value:item.points }))
             }}>
           {item.description}
             </p> 
             <p>Points: {item.points}</p> 
         </li>
     )

      return (
        <div className="gameCreatePost">
        <h3>Post a Score</h3>
        <CreatePostForm/>
       <ul>
           {/* {scores} */}
       </ul>
        </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('>>>>>',state)
    return {
        scoreOpps: state.game.data.scores,
        gameId:state.game.data.id
    };
};

export default connect(mapStateToProps)(GameCreatePost);