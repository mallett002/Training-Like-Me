import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import 'firebase/auth';
import { routerMiddleware } from 'connected-react-router';
import { browserHistory } from '../root-reducer';
  
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        logger,
        routerMiddleware(browserHistory)
    )
);

export default store;
