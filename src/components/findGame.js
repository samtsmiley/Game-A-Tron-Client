import React from 'react';
import {connect} from 'react-redux';

export class FindGame extends React.Component {
    componentDidMount() {
        //this.props.dispatch(fetchGames());
    }    

    render() {
    //     let { games } = this.props;
    //     //console.log("in SessionList", games);
    //     const game = games.map( (game, index) => (
    //         <Game game={game} key={index} />
    // ));

      return (
        <div className="">
        <h1>Find a Game</h1>
        {/* <Game /> */}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(FindGame);