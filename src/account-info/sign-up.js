import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";
import { Link } from 'react-router-dom';

class SignUp extends Component {
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

  createNewUser = () => {
    this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
          <h1>Create An Account</h1>
          <div>
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
            <button onClick={this.createNewUser}>create</button>
          </div>
          <div>
            <p>Already have an account?</p>
            <Link to='/sign-in'>
                <button>Sign In</button>
            </Link>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default compose(
  withFirebase,
)(SignUp);
