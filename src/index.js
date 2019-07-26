import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/configure-store';
import * as serviceWorker from './serviceWorker';

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
