import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landingPage.css';

import LoginForm from './loginForm';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <div className="landingPageLogo"></div>
            <h1>Welcome</h1>
            <p>Use this app to easily create or join games.</p>
            <p>Compete against other players to achieve Vicory!</p>
            <p>And Remember...</p>
            <h2>You Can't Win if You Don't Play</h2>
            <span>
                <Link className='link' to="/register">Create a New Account</Link> or login below.
            </span>
            <div className='logIn'>
                <LoginForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
