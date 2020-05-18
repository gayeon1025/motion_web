import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './modules';

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
