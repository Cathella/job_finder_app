import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import jobsReducer from './jobs/jobs';

const reducer = combineReducers({
  jobs: jobsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
