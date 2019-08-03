import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";

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

            <button onClick={this.createNewUser}>create</button>
          </div>
      </div>
    );
  }
}

SignUp.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default compose(
  // firebase sdk
  withFirebase,
  // connect(({ firebase: { auth } }) => ({ auth })) // dont need this to access firebase. withFirebase gives us it.
)(SignUp);
