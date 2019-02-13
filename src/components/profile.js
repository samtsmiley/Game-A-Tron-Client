import React from "react";
import {connect} from 'react-redux';
import GamePostsList from "./GamePostsList";

//import {fetchProtectedData} from '../actions/protected-data';


export class Profile extends React.Component {
    componentDidMount() {
        
       // this.props.dispatch(fetchProtectedData());
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
    //protectedData: state.protectedData.data
  };
};

export default connect(mapStateToProps)(Profile);
