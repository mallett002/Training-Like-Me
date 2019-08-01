import App from './app-root/App';
import firebase from 'firebase/app';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import store from './store/configure-store';
import * as serviceWorker from './serviceWorker';
import config from './firebase/config';
import './index.css';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/functions';


const reduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
};

const rrfProps = {
    firebase,
    config: reduxFirebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

console.log({config});

firebase.initializeApp(config);
firebase.firestore();
firebase.functions();

const AppWithStore = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
