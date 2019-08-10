import { combineReducers } from 'redux';
import sessionReducer from './session/dux';
import loadingStatusReducer from './loadingStatus/dux'; 
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const browserHistory = createBrowserHistory();

export default combineReducers({
  loadingState: loadingStatusReducer,
  router: connectRouter(browserHistory),
  sessionState: sessionReducer
});