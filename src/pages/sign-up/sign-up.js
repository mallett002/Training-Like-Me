import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LOG_IN } from '../../routes/routes';
import { goToRoute } from '../../routes/navigation';

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
                <button onClick={() => goToRoute(LOG_IN)}>
                  Sign In
                </button>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default SignUp;
