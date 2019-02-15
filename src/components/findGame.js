import React from 'react';
import {connect} from 'react-redux';
import {fetchAllGames} from '../actions/game'


export class FindGame extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllGames());
    }    

    render() {
        const games = this.props.gameList.map(game =>
            <li className="gameName" key={game.name}>    
               <button className="gameButton" onClick={() =>{
                    this.props.dispatch(fetchGameById(game.id))
                    .then(() =>this.props.dispatch(showOneGame()) )
                }}>
              {game.name}
                    </button>       
                     
            </li>
        )



    //     let { games } = this.props;
    //     //console.log("in SessionList", games);
    //     const game = games.map( (game, index) => (
    //         <Game game={game} key={index} />
    // ));

      return (
        <div className="">
        <h1>Find a Game</h1>
        {/* <Game /> */}
        {games}
        </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        gameList: state.game.allGames
    };
};

export default connect(mapStateToProps)(FindGame);