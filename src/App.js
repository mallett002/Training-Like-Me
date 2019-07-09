import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// import firebase from 'firebase';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {user:{hi:'hi'}}
  }
  updateUser = ()=>{
    // this.setState({user: firebase.auth().currentUser});
  }
  render() {return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={this.updateUser}
        >
          {/* {JSON.stringify(this.state.user)} */}
        </button>
      </header>
    </div>
  )};
}

export default App;
