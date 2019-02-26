import React from 'react';
import {connect} from 'react-redux';
import GameLeaderboardListPlayers from './gameLeaderboardListPlayers';
import './gameLeaderboard.css'
import FirstMedal from '../assets/images/place_1.png';
import SecondMedal from '../assets/images/place_2.png';
import ThirdMedal from '../assets/images/place_3.png';
import FirstBear from '../assets/images/bear_1.png';
import SecondBear from '../assets/images/bear_2.png';
import ThirdBear from '../assets/images/bear_3.png';
import FirstTrophy from '../assets/images/trophy_1.png';
import SecondTrophy from '../assets/images/trophy_2.png';
import ThirdTrophy from '../assets/images/trophy_3.png';
 
export class GameLeaderboard extends React.Component {
    constructor(props){
    super(props);

    this.state = {
 
        prizeType: 1,
        prizeOptions:['Medal','Trophy','Bear'],
        prize_1: FirstMedal,
        prize_2: SecondMedal,
        prize_3: ThirdMedal
 
    }

    this.selectPrize = this.selectPrize.bind(this);

    }
 
    selectPrize(value){

        console.log('hello',value)
 
        if (value === this.state.prizeOptions[0]){
         
         this.setState({
                prizeType: 1,
                prize_1: FirstMedal,
                prize_2: SecondMedal,
                prize_3: ThirdMedal
            })

        }

        if (value === this.state.prizeOptions[1]){
              
         this.setState({
                prizeType: 2,
                prize_1: FirstTrophy,
                prize_2: SecondTrophy,
                prize_3: ThirdTrophy
            })

        }

        if (value === this.state.prizeOptions[2]){
              
         this.setState({
                prizeType: 3,
                prize_1: FirstBear,
                prize_2: SecondBear,
                prize_3: ThirdBear
            })

        }
  
     
   
    }

    render() {

      return (
        <div className="subcard">
            <GameLeaderboardListPlayers 
                prizeOptions={this.state.prizeOptions}
                prizeType={this.state.prizeType}
                selectPrize={this.selectPrize}
                prize_1={this.state.prize_1}
                prize_2={this.state.prize_2}
                prize_3={this.state.prize_3}
                selectedGame ={this.props.selectedGame}
                gameParticipants={this.props.gameParticipants}/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedGame: state.game.data,
        gameParticipants: state.game.data.participants,
        gameEndScore: state.game.data.endScore
    };
};

export default connect(mapStateToProps)(GameLeaderboard);