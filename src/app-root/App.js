import React from 'react';
import './App.css';

const signIn = () => {
  alert('You successfully signed in!');
};

const App = () => (
  <div>
    <h1>Train Like Me</h1>
    <h3>Sign in</h3>

    <form onSubmit={signIn}>
    <input />
    <button>Submit</button>
    </form>    
  </div>
);

export default App;
