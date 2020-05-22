import { combineReducers } from 'redux';

const entitiesReducer = (state = {}, action) => {
  if (action.entities) {
    return {
      ...state,
      ...action.entities
    };
  }
  return state;
};

const reducer = combineReducers({
  entities: entitiesReducer
});

export default reducer;
