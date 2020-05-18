import { types } from '.';

export function fetchBoardsRequest(page) {
  return {
    type: types.FETCH_BOARDS_REQUEST,
    page
  };
}

export function fetchBoardsSuccess(
  numberOfTotalPages,
  hasPreviousPage,
  hasNextPage,
  { entities }
) {
  return {
    type: types.FETCH_BOARDS_SUCCESS,
    numberOfTotalPages,
    hasPreviousPage,
    hasNextPage,
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
