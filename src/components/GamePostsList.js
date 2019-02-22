import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';


export class GamePostsList extends React.Component {
    componentDidMount() {
    }    

    render() {
        const posts = this.props.posts.map(post =>
            <li className="onePost subcard" key={post.id}>    
            <p className="gameButton">
           {post.userId} scored {post.value} points for {post.description} at {moment(post.createdAt).format("MMM Do YYYY, h:mm:ss a")} .
             </p> 
         </li>
        )
      return (
        <div className="gamePosts">
             <h2>Game Score History</h2>
            <ul>
            {posts}
            </ul>
        </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state.game.data in GPL:',state.game.data)
    return {
        posts:state.game.data.posts
    };
};

export default connect(mapStateToProps)(GamePostsList);