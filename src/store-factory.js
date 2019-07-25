import { compose, createStore } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import rootReducer from './root-reducer';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

// react-redux-firebase options
const reduxFirebaseConfig = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
};

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, reduxFirebaseConfig)
)(createStore);
  
const initialState = {};

export default createStoreWithFirebase(rootReducer, initialState);
