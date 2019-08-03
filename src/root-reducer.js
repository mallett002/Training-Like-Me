import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const browserHistory = createBrowserHistory();

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  router: connectRouter(browserHistory)
});