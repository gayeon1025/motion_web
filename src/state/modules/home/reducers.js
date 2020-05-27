import { combineReducers } from 'redux';
import types from 'state/modules/home/types';

const entitiesReducer = (state = {}, action) => {
  if (action.entities) {
    return {
      ...state,
      ...action.entities
    };
  }

  switch (action.type) {
    case types.FETCH_ATTATCHMENTS_SUCCESS:
      return {
        ...state,
        attatchments: action.attatchments
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  entities: entitiesReducer
});

export default reducer;
