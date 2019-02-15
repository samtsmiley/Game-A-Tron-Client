import React from "react";
import {connect} from 'react-redux';
import GamePostsList from "./GamePostsList";


export class Profile extends React.Component {
    componentDidMount() {
    }

    

  render() {
      
    return (
        <div className="container">
            <h2>Posts</h2>
            <GamePostsList />
        </div>
    );
}
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
  return {
    username: currentUser.username,
  };
};

export default connect(mapStateToProps)(Profile);
