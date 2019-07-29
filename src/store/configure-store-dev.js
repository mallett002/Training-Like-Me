import { applyMiddleware, createStore } from 'redux';
import config from '../firebase/config';
import firebase from 'firebase/app';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import 'firebase/auth';

firebase.initializeApp(config);
  
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
);

export default store;
