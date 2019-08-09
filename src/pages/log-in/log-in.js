import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { COMMUNITY, SIGN_UP } from '../../routes/routes';
import { goToRoute } from '../../routes/navigation';
import { FirebaseContext } from '../../firebase';

class LogIn extends Component {
  static contextType = FirebaseContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value.toString() });
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  logUserIn = () => {
    const firebase = this.context;
    const { email, password } = this.state;

    try {
      firebase.logInWithEmailAndPassword(email, password);
      goToRoute(COMMUNITY);
    } catch(error) {
      console.log({error});
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

export default LogIn;
