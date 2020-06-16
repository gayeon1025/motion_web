import { combineReducers } from 'redux';
import produce from 'immer';
import merge from 'lodash/merge';
import types from 'state/modules/home/types';

const entitiesReducer = produce((draft = {}, action) => {
  console.log(action);
  switch (action.type) {
    case types.FETCH_SCHEDULES_SUCCESS:
      draft.schedules = action.entities.schedules;
      break;
    case types.DELETE_SCHEDULE_SUCCESS:
      break;
    default:
  }

  return draft;
}, {});

// const entitiesReducer = (state = {}, action) => {
//   switch (action.type) {
//     case types.FETCH_ATTATCHMENTS_SUCCESS:
//       return {
//         ...state,
//         attatchments: action.attatchments
//       };
//     // case types.DELETE_SCHEDULE_SUCCESS:

//     default:
//       if (action.entities) {
//         return {
//           ...state,
//           ...action.entities
//         };
//       }
//       return state;
//   }
// };

const reducer = combineReducers({
  entities: entitiesReducer
});

export default reducer;
