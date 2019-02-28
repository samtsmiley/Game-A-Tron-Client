import React from 'react';
import {connect} from 'react-redux';
import { fetchAllGames } from '../actions/game'
import { fetchGameById } from '../actions/game'
import { showOneGame } from '../actions/sideBar-actions'
import './findGame.css'


export class FindGame extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllGames());
    }    

    gameClicked(id){
      const { dispatch} = this.props;
      dispatch(fetchGameById(id))
        .then(() =>dispatch(showOneGame()));
    }

    render() {
      const { gameList} = this.props;
      const games = gameList.map(game => {
        const {name, id, description} = game;

        return (
          <li className="gameName subcard" key={name}>    
            <button className="gameButton gamebtn"
             onClick={() => this.gameClicked(id)}>
              {name}
            </button> 
            <p>About: {description}</p>    
          </li>
        )
      });

      return (
        <div className="findGame card">
          <h1>Find a Game</h1>
          <ul>
            {games}
          </ul>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  gameList: state.game.allGames,
  isGameLoading: state.game.loading
});

export default connect(mapStateToProps)(FindGame);