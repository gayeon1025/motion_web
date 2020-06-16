import { denormalize } from 'normalizr';
import get from 'lodash/get';
import {
  boards as boardListSchema,
  board as boardSchema,
  schedule as scheduleSchema
} from 'state/modules/home/schema';
import { convertToTZDate } from 'utils/dateUtil';

const getBoards = (state, props) => {
  const {
    home: { entities }
  } = state;
  if (entities.boards) {
    const keys = Object.keys(entities.boards);
    return denormalize(entities.boards[keys[0]], boardListSchema, entities);
  }

  return [];
};

const getBoard = (state, props) => {
  const {
    home: { entities }
  } = state;
  const {
    match: {
      params: { boardId }
    }
  } = props;

  if (!entities.board || !entities.board[boardId]) {
    return null;
  }

  return {
    ...denormalize(entities.board[boardId], boardSchema, entities),
    attatchments: get(entities.board, 'attathcments', null)
  };
};

const getAttatchments = (state, props) => {
  const {
    home: { entities }
  } = state;

  if (!entities.attatchments) {
    return null;
  }

  return entities.attatchments;
};

const getSchedules = (state, props) => {
  const {
    home: { entities }
  } = state;

  if (!entities.schedules) {
    return entities.schedules;
  }

  const schedules = [];
  Object.keys(entities.schedules).forEach(id => {
    const schedule = entities.schedules[id];
    schedules.push({ ...schedule });
  });

  return schedules;
};

export default {
  getBoards,
  getBoard,
  getAttatchments,
  getSchedules
};
