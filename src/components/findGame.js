import React from 'react';
import {connect} from 'react-redux';
import {fetchAllGames} from '../actions/game'
import {fetchGameById} from '../actions/game'
import {showOneGame} from '../actions/sideBar-actions'
import './findGame.css'


export class FindGame extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllGames());
    }    
    
    gamePushed(){

    }

    render() {
        const games = this.props.gameList.map(game =>
            <li className="gameName subcard" key={game.name}>    
               <button className="gameButton" onClick={() =>{
                    this.props.dispatch(fetchGameById(game.id))
                    .then(() =>this.props.dispatch(showOneGame()) )
                }}>
              {game.name}
                </button> 
                <p>About: {game.description}</p> 
                 
            </li>
        )



    //     let { games } = this.props;
    //     //console.log("in SessionList", games);
    //     const game = games.map( (game, index) => (
    //         <Game game={game} key={index} />
    // ));

      return (
        <div className="findGame card">
        <h1>Find a Game</h1>
        {/* <Game /> */}
        <ul>
        {games}
        </ul>
        </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        gameList: state.game.allGames,
    isGameLoading: state.game.loading

    };
};

export default connect(mapStateToProps)(FindGame);