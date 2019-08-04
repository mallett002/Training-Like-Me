import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";

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
    this.props.firebase.login(this.state.email, this.state.password);
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
                <Link to='/sign-up'>
                    <button>Sign Up</button>
                </Link>
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
