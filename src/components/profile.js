import React from "react";
import {connect} from 'react-redux';
import moment from 'moment';
import './profile.css';
// import Post from './post'

// import GamePostsList from "./GamePostsList";

export class Profile extends React.Component {


  render() {
    // const posts = this.props.myPosts.map((post, index) => {
    //   return <Post key={index} {...post} iScored={true}/>
    // })
     
    const posts = this.props.myPosts.map(post =>
      <li className="onePost subcard" key={post.id}>    
        <p className="gameButton">
          I scored {post.value} points for {post.description} in game {post.gameId.name} at {moment(post.createdAt).format("MMM Do YYYY, h:mm:ss a")}.
        </p> 
        <p>{post.comment}</p>
        <img width= '300px' src={post.image} alt=''></img>
      </li>
)
      
    return (
        <div className="container card">
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
  // console.log('>><>>>>>',state)
  return {
    myPosts:state.post.myPosts,
    userId: state.auth.currentUser.id
  };
};

export default connect(mapStateToProps)(Profile);
