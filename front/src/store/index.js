import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/index';

const createStoreWithMiddleWares = compose(
    applyMiddleware(thunk, logger),
)(createStore);

const store = createStoreWithMiddleWares(combineReducers(reducers));
export default store;