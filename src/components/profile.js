import React from "react";
import {connect} from 'react-redux';
import './profile.css';
import Post from './post'
import {fetchAllPostsForUserById} from '../actions/post'

export class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPostsForUserById(this.props.userId));
  }

  render() {
    const posts = this.props.myPosts.map((post, index) => {
      return <Post key={index} {...post} iScored={true}/>
    })
     
      
    return (
      <div className="card">
        <h2>My Score History</h2>
      {this.props.userName === 'spectator'
        ? <p>Make an account to post scores and see your history.</p>
        : <div className="container">
            <ul>
              {posts}
            </ul>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('>><>>>>>',state)
  return {
    myPosts:state.post.myPosts,
    userId: state.auth.currentUser.id,
    userName:state.auth.currentUser.username,
  };
};

export default connect(mapStateToProps)(Profile);
