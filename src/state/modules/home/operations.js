import axios from 'axios';
import { camelizeKeys } from 'humps';
import queryString from 'query-string';
import {
  fetchBoardsRequest,
  fetchBoardsSuccess,
  fetchBoardsFailure
} from 'state/modules/home/actions';
import { board as boardSchema } from 'state/modules/home/schema';
import { normalize } from 'normalizr';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const fetchBoards = page => dispatch => {
  dispatch(fetchBoardsRequest(page));
  return client.get(`/boards?page=${page}`).then(result => {
    const camelized = camelizeKeys(result.data);
    return dispatch(
      fetchBoardsSuccess(
        camelized.numberOfTotalPages,
        camelized.hasPreviousPage,
        camelized.hasNextPage,
        normalize(camelized.items, [boardSchema])
      )
    );
  });
};

export default {
  fetchBoards
};
