import { types } from '.';

export function fetchBoardsRequest(page) {
  return {
    type: types.FETCH_BOARDS_REQUEST,
    page
  };
}

export function fetchBoardsSuccess({ entities }) {
  return {
    type: types.FETCH_BOARDS_SUCCESS,
    entities
  };
}

export function fetchBoardsFailure(error) {
  return {
    type: types.FETCH_BOARDS_FAILURE,
    error
  };
}

export function fetchBoardRequest(boardId) {
  return {
    type: types.FETCH_BOARD_REQUEST,
    boardId
  };
}

export function fetchBoardSuccess({ entities }) {
  return {
    type: types.FETCH_BOARD_SUCCESS,
    entities
  };
}

export function fetchBoardFailure(error) {
  return {
    type: types.FETCH_BOARD_FAILURE,
    error
  };
}

export function fetchAttatchmentsSuccess(files) {
  return {
    type: types.FETCH_ATTATCHMENTS_SUCCESS,
    attatchments: files
  };
}

export function fetchSchedulesRequest() {
  return {
    type: types.FETCH_SCHEDULES_REQUEST
  };
}

export function fetchSchedulesSuccess({ entities }) {
  // console.log(entities);
  return {
    type: types.FETCH_SCHEDULES_SUCCESS,
    entities
  };
}

export function fetchSchedulesFailure(error) {
  return {
    type: types.FETCH_SCHEDULES_FAILURE,
    error
  };
}

export function saveScheduleRequest() {
  return {
    type: types.SAVE_SCHEDULE_REQUEST
  };
}

export function saveScheduleSuccess({ entities }) {
  return {
    type: types.SAVE_SCHEDULE_SUCCESS,
    entities
  };
}

export function saveScheduleFailure(error) {
  return {
    type: types.SAVE_SCHEDULE_FAILURE,
    error
  };
}

export function changeScheduleRequest() {
  return {
    type: types.CHANGE_SCHEDULE_REQUEST
  };
}

export function changeScheduleSuccess({ entities }) {
  return {
    type: types.CHANGE_SCHEDULE_SUCCESS,
    entities
  };
}

export function changeScheduleFailure(error) {
  return {
    type: types.CHANGE_SCHEDULE_FAILURE,
    error
  };
}

export function deleteScheduleRequest() {
  return {
    type: types.DELETE_SCHEDULE_REQUEST
  };
}

export function deleteScheduleSuccess({ entities }) {
  return {
    type: types.DELETE_SCHEDULE_SUCCESS,
    entities
  };
}

export function deleteScheduleFailure(error) {
  return {
    type: types.DELETE_SCHEDULE_FAILURE,
    error
  };
}
