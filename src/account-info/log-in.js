import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";
import ROUTES, { COMMUNITY, SIGN_UP } from '../routes/routes';
import { goToRoute } from '../routes/navigation';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  logUserIn = () => {
    try {
      this.props.firebase.login(this.state.email, this.state.password);
      goToRoute(ROUTES[COMMUNITY].path);
    } catch {
      console.log('Error logging in');
    }
  }

  render() {

    return (
        <div>
            <h1>Log In</h1>
            <div>
                <span>Please Login</span>
                <input
                    placeholder='email'
                    type='text'
                    onChange={this.setEmail}
                />
                <input
                    placeholder='password'
                    type='text'
                    onChange={this.setPassword}
                />

                <button onClick={this.logUserIn}>login</button>
            </div>
            <div>
                <p>Don't have an account?</p>
                    <button onClick={() => goToRoute(SIGN_UP)}>
                      Sign Up
                    </button>
            </div>
        </div>
    );
  }
}

LogIn.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default compose(
  withFirebase,
)(LogIn);
