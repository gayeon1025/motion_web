import { denormalize } from 'normalizr';
import queryString from 'query-string';
import get from 'lodash/get';
import { board as boardSchema } from 'state/modules/home/schema';

const getBoards = (state, props) => {
  const {
    home: { entities }
  } = state;
  if (entities.boards) {
    const keys = Object.keys(entities.boards);
    return denormalize(entities.boards[keys[0]], boardSchema, entities);
  }

  return [];
};

export default {
  getBoards
};
