import { applyMiddleware, createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase'
import config from '../firebase/config';
import firebase from 'firebase/app';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import 'firebase/auth';

firebase.initializeApp(config);

// react-redux-firebase options
const reduxFirebaseConfig = {
    userProfile: 'users'
  };
  
const initialState = {};

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, reduxFirebaseConfig)
)(createStore);

const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    applyMiddleware(logger)
);

export default store;
