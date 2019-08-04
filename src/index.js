import AppRoot from './app-root';
import config from './firebase/config';
import firebase from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configure-store';
import { createFirestoreInstance } from 'redux-firestore';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/functions';
import { browserHistory } from './root-reducer';


const reduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
};

const rrfProps = {
    firebase,
    config: reduxFirebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

firebase.initializeApp(config);
firebase.firestore();
firebase.functions();

const AppWithStore = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ConnectedRouter history={browserHistory}>
        <AppRoot />
      </ConnectedRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
