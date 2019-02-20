import React from 'react';
import {connect} from 'react-redux';
import { Line, Circle } from 'rc-progress';


export class GameProgressBar extends React.Component {
    componentDidMount() {
    }    

    render() {
      return (
        <div className="gameProgressBar">
            <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
            <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(GameProgressBar);