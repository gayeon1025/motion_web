import { createStore, combineReducers } from 'redux';
import * as reducers from 'state/modules/index';

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState);
}
