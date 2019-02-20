import React from "react";
import {connect} from 'react-redux';
import moment from 'moment'

// import GamePostsList from "./GamePostsList";

export class Profile extends React.Component {
    componentDidMount() {
    }

  render() {
    const posts = this.props.myPosts.map(post =>
      <li className="onePost" key={post.id}>    
      <p className="gameButton">
     I scored {post.value} points for {post.description} in game {post.gameId} at {moment(post.createdAt).format("MMM Do YYYY, h:mm:ss a")} .
       </p> 
   </li>
)
      
    return (
        <div className="container">
            <h2>My Score History</h2>
            <ul>
            {posts}
            </ul>
            {/* <GamePostsList /> */}
        </div>
    );
}
}

const mapStateToProps = state => {
  // console.log('>><>>>>>',state.post.myPosts)
  return {
    myPosts:state.post.myPosts,
    userId: state.auth.currentUser.id
  };
};

export default connect(mapStateToProps)(Profile);
