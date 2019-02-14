import React from 'react';
import {connect} from 'react-redux';
import  CreatePostForm  from './createPostForm';


export class GameCreatePost extends React.Component {
    componentDidMount() {
    }    



    render() {
        
      return (
        <div className="gameCreatePost">
       <CreatePostForm/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameCreatePost);