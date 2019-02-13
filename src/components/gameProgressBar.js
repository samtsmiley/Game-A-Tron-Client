import React from 'react';
import {connect} from 'react-redux';

export class GameProgressBar extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameProgressBar">
      
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameProgressBar);