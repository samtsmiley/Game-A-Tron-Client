import React from 'react';
import {connect} from 'react-redux';

export class GameDescription extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameDescription">
      
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameDescription);