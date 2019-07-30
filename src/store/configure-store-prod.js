import { createStore } from 'redux';
import config from '../firebase/config';
import firebase from 'firebase/app';
import rootReducer from '../root-reducer';
import 'firebase/auth';

firebase.initializeApp(config);
  
const initialState = {};

const store = createStore(
    rootReducer,
    initialState
);

export default store;

