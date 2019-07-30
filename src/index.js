import App from './app-root/App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configure-store';
import * as serviceWorker from './serviceWorker';
import './index.css';

const AppWithStore = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
