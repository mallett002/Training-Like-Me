import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import firebase from 'firebase';

//   var firebaseConfig = {
//     apiKey: "AIzaSyBJTVqp5Hs9j6aKDowsnnqQJfip8og2aAI",
//     authDomain: "myfirstcorberapp.firebaseapp.com",
//     databaseURL: "https://myfirstcorberapp.firebaseio.com",
//     projectId: "myfirstcorberapp",
//     storageBucket: "",
//     messagingSenderId: "167061769921",
//     appId: "1:167061769921:web:2f5164fbec96d516"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// firebase.auth().createUserWithEmailAndPassword('asdf1@asdf.asdf', 'poopie').catch(function(error) {
//     console.log(error);
//   });
  ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
