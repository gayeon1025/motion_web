import axios from 'axios';
import { camelizeKeys } from 'humps';
import {
  fetchBoardsRequest,
  fetchBoardsSuccess,
  fetchBoardsFailure,
  fetchBoardRequest,
  fetchBoardSuccess,
  fetchBoardFailure,
  fetchAttatchmentsSuccess,
  fetchSchedulesRequest,
  fetchSchedulesSuccess,
  fetchSchedulesFailure,
  saveScheduleRequest,
  saveScheduleFailure,
  saveScheduleSuccess
} from 'state/modules/home/actions';
import {
  boards as boardListSchema,
  board as boardSchema,
  schedule as scheduleSchema
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
  return client.post(`/boards`, board).then(result => {
    console.log(result.data);
  });
};

const fetchSchedules = (year, month) => dispatch => {
  dispatch(fetchSchedulesRequest());
  return client
    .get(`schedules?year=${year}&month=${month}`)
    .then(result => {
      const camelized = camelizeKeys(result.data);
      console.log(result.data);
      // console.log(normalize(camelized, scheduleSchema));
      return dispatch(
        fetchSchedulesSuccess(normalize(camelized, scheduleSchema))
      );
    })
    .catch(error => fetchSchedulesFailure(error));
};

const saveSchedule = schedule => dispatch => {
  dispatch(saveScheduleRequest());
  return client
    .post(`/schedules`, schedule)
    .then(result => {
      if (result.status === 200) {
        return dispatch(
          saveScheduleSuccess(normalize(result.data, scheduleSchema))
        );
      }
    })
    .catch(error => saveScheduleFailure(error));
};

export default {
  fetchBoards,
  fetchBoard,
  fetchAttatchments,
  saveBoard,
  fetchSchedules,
  saveSchedule
};
