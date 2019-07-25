import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store-factory';
import * as serviceWorker from './serviceWorker';

const StoreConnector = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<StoreConnector />, document.getElementById('root'));
serviceWorker.unregister();
