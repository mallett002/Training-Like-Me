import App from './App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import store from './store/configure-store';
import * as serviceWorker from './serviceWorker';
import './index.css';

// react-redux-firebase options
const reduxFirebaseConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
};

const AppWithStore = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reduxFirebaseConfig}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
