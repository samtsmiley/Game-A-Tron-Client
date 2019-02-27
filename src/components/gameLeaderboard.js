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
 
        prizeType: 0,
        prizeImageOptions:[
                  {   
                    setIndex:'0',
                    setName: 'Medals',
                    prize_1: FirstMedal,
                    prize_2: SecondMedal,
                    prize_3: ThirdMedal
                  },
                  {   
                    setIndex:'1',
                    setName: 'Trophies',
                    prize_1: FirstTrophy,
                    prize_2: SecondTrophy,
                    prize_3: ThirdTrophy
                  },
                  {   
                    setIndex:'2',
                    setName: 'Bears',
                    prize_1: FirstBear,
                    prize_2: SecondBear,
                    prize_3: ThirdBear
                  },
        ]
      
    }

    this.selectPrize = this.selectPrize.bind(this);

    }
 
    selectPrize(value){
  
        const imagePointer = parseInt(value);
          
        this.setState({
            prizeType: imagePointer,
            prize_1: this.state.prizeImageOptions[imagePointer].prize_1,
            prize_2: this.state.prizeImageOptions[imagePointer].prize_2,
            prize_3: this.state.prizeImageOptions[imagePointer].prize_3
        })
  
    }

    

    render() {
 
      return (
        <div className="subcard">
            <GameLeaderboardListPlayers 
                gameEndScore={this.props.gameEndScore}
                prizeImageOptions={this.state.prizeImageOptions}
                prizeType={this.state.prizeType}
                selectPrize={this.selectPrize}
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