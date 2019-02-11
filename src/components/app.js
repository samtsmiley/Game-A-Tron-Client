import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import IdleTimer from 'react-idle-timer'

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
       
      }
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            10 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div>
            <IdleTimer
              ref={ref => { this.idleTimer = ref }}
              element={document}
              onActive={this.onActive}
              onIdle={this.onIdle}
              onAction={this.onAction}
              debounce={250}
              timeout={1000 * 60 * .5} />
            <div className="app">
                <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
            </div>
            </div>
        );
    }
    _onAction(e) {
        console.log('user did something', e)
        // setTimeout(function(){this.props.dispatch(clearAuth())},(10000))
        console.log('time remaining', this.idleTimer.getRemainingTime())
        if (this.idleTimer.getRemainingTime() < 10000) {
            alert('please do something')
        }
        
      }
      
    _onActive(e) {
        console.log('user is active', e)
        console.log('time remaining', this.idleTimer.getRemainingTime())
        
      }
     
      
     _onIdle(e) {
        
        console.log('user is idle', e)
        console.log('last active', this.idleTimer.getLastActiveTime())
        // setTimeout(function(){this.props.dispatch(clearAuth())},(10000))
        // window.alert("You will be logged out automatically in 10 sec")
        // setTimeout(100000)
        this.props.dispatch(clearAuth());
       
       

      }
     
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
