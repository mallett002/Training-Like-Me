import React, { Component } from 'react';
import './App.css';
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirebase, isLoaded, isEmpty } from "react-redux-firebase";

class App extends Component {
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

  createNewUser = () => {
    this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
  }

  render() {
    const { auth, firebase } = this.props;

    return (
      <div>
        {!isLoaded(auth) && <span>Loading...</span>}
        {isEmpty(auth) && (
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
            <button onClick={this.createNewUser}>create</button>
          </div>
        )}

        {isLoaded(auth) && !isEmpty(auth) && (
          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <button onClick={() => { firebase.auth().signOut() }}>logout</button>
            </header>
          </div>
        )}
      </div>
    );
  }
}

export default compose(
  withFirebase,
  connect(({ firebase: { auth } }) => ({ auth }))
)(App)
