import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import 'firebase/auth';
  
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
);

export default store;
