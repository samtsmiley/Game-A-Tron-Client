import React from 'react';
import {connect} from 'react-redux';

export class GamePosts extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gamePosts">
      
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GamePosts);