import React from 'react';
import {connect} from 'react-redux';

export class GamePostsList extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gamePosts">
        {/* <Post /> */}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GamePostsList);