import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import HeaderBar from './headerBar';
import NewGame  from './newGame';
import SideBar from './sideBar';
import GameDashboard  from './gameDashboard';
import FindGame from './findGame';
import Profile from './profile';
import './dashboard.css';
import {fetchAllGames} from '../actions/game'

export class Dashboard extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchAllGames());
    }

    render() {

        return (
            <div className="dashboard">
                <HeaderBar />
                <div className="full-display">
                    <SideBar />	
                    <section className="display-area">
                        {this.props.showProfile && <Profile/>}
                        {this.props.showFindGame && <FindGame/>}
                        {this.props.showNewGame && <NewGame/>}
                        {this.props.showOneGame && <GameDashboard/>}
                        {/* {this.props.showAllPosts && <Timeline/>} */}
                    </section>	
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
//   console.log(state)
    return {
        showProfile: state.sideBar.showProfile,
        showFindGame: state.sideBar.showFindGame,
        showNewGame: state.sideBar.showNewGame,
        showOneGame: state.sideBar.showOneGame,
        showAllPosts: state.sideBar.showAllPosts,
        userId: state.auth.currentUser.id
   	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
