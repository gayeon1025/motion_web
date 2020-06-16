import { combineReducers } from 'redux';
import produce from 'immer';
import types from 'state/modules/home/types';

const entitiesReducer = produce((draft = {}, action) => {
  switch (action.type) {
    case types.FETCH_SCHEDULES_SUCCESS:
      draft.schedules = action.entities.schedules;
      break;
    case types.SAVE_SCHEDULE_SUCCESS:
    case types.CHANGE_SCHEDULE_SUCCESS:
      const id = Object.keys(action.entities.schedules)[0];
      draft.schedules[id] = action.entities.schedules[id];
      break;
    case types.DELETE_SCHEDULE_SUCCESS:
      const deletedScheduleId = Object.keys(action.entities.schedules)[0];
      delete draft.schedules[deletedScheduleId];
      break;
    default:
  }

  return draft;
});

const reducer = combineReducers({
  entities: entitiesReducer
});

export default reducer;
