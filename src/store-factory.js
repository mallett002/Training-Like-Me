import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from './root-reducer';
import config from './firebase/config';
import firebase from 'firebase';

// react-redux-firebase options
const reduxFirebaseConfig = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: true, // enable/disable Firebase's database logging
};

firebase.initializeApp(config);
  
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase, reduxFirebaseConfig),
        applyMiddleware(
            thunk.withExtraArgument(getFirebase)
        )
    )
);

export default store;
