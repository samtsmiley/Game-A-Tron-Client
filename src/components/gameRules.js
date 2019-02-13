import React from 'react';
import {connect} from 'react-redux';

export class GameRules extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameRules">
      
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameRules);