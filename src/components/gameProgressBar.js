import React from 'react';
import {connect} from 'react-redux';
import { Line, Circle } from 'rc-progress';

export class GameProgressBar extends React.Component {
    componentDidMount() {
    }    

    render() {

        let percentProgress = 55;

        let barContainerStyle = {
            width: '70%',
            height: '70%',
            display: 'inline-block',
          };

      return (
        <div >
            <h3>Your progress so far {percentProgress}%: </h3>
            <div style={barContainerStyle}>
            <Line percent={percentProgress} strokeWidth="4" trailWidth="3.75" trailColor="#bebec8" strokeColor="#4aa84a" strokeLinecap='round'/>
            {/* <Circle percent="0" strokeWidth="4" trailWidth="3.75" trailColor="#beb4b4" strokeColor="#4aa84a" strokeLinecap='round'/> */}
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameParticipants: state.game.data.participants
    };
};

export default connect(mapStateToProps)(GameProgressBar);