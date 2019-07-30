import App from './app-root/App';
import firebase from 'firebase/app';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './store/configure-store';
import * as serviceWorker from './serviceWorker';
import './index.css';

const reduxFirebaseConfig = {
  userProfile: 'users'
};

const rrfProps = {
    firebase,
    config: reduxFirebaseConfig,
    dispatch: store.dispatch
}

const AppWithStore = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
