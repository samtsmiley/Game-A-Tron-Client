import React from 'react';
import {connect} from 'react-redux';

export class GameCreatePost extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameCreatePost">
      
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameCreatePost);