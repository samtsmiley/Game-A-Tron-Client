import React from "react";
import {connect} from 'react-redux';
import './profile.css';
import Post from './post'

// import GamePostsList from "./GamePostsList";

export class Profile extends React.Component {


  render() {
    const posts = this.props.myPosts.map((post, index) => {
      return <Post key={index} {...post} iScored={true}/>
    })
     
      
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
