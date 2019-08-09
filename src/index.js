import AppRoot from './app-root';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configure-store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import { browserHistory } from './root-reducer';
import Firebase, { FirebaseContext } from './firebase';

const AppWithStore = () => (
  <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        <FirebaseContext.Provider value={new Firebase()}>
          <AppRoot />
        </FirebaseContext.Provider>
      </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
