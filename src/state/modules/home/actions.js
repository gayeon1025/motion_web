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

export function fetchBoardsFailure(page, error) {
  return {
    type: types.FETCH_BOARDS_FAILURE,
    page,
    error
  };
}
