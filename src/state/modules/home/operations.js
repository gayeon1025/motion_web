import axios from 'axios';
import { camelizeKeys } from 'humps';
import {
  fetchBoardsRequest,
  fetchBoardsSuccess,
  fetchBoardsFailure,
  fetchBoardRequest,
  fetchBoardSuccess,
  fetchBoardFailure,
  fetchAttatchmentsSuccess
} from 'state/modules/home/actions';
import {
  boards as boardListSchema,
  board as boardSchema
} from 'state/modules/home/schema';
import { normalize } from 'normalizr';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const fetchBoards = page => dispatch => {
  dispatch(fetchBoardsRequest(page));
  return client
    .get(`/boards?page=${page}`)
    .then(result => {
      const camelized = camelizeKeys(result.data);
      return dispatch(
        fetchBoardsSuccess(normalize(camelized, boardListSchema))
      );
    })
    .catch(error => fetchBoardsFailure(error));
};

const fetchBoard = boardId => dispatch => {
  dispatch(fetchBoardRequest(boardId));
  return client
    .get(`/boards/${boardId}`)
    .then(result => {
      const camelized = camelizeKeys(result.data);
      return dispatch(fetchBoardSuccess(normalize(camelized, boardSchema)));
    })
    .catch(error => fetchBoardFailure(error));
};

const fetchAttatchments = files => dispatch => {
  return dispatch(fetchAttatchmentsSuccess(files));
};

const saveBoard = board => dispatch => {
  console.log(board);
  return client.post(`/boards`, board).then(result => {
    console.log(result.data);
  });
};

export default {
  fetchBoards,
  fetchBoard,
  fetchAttatchments,
  saveBoard
};
