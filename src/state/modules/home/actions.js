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
