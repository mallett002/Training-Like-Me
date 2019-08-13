import { applyMiddleware, createStore } from 'redux';
import { browserHistory } from '../root-reducer';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
  
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        logger,
        thunk,
        routerMiddleware(browserHistory)
    )
);

export default store;
