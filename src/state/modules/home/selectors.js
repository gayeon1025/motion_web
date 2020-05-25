import { denormalize } from 'normalizr';
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

const getBoard = (state, props) => {
  const {
    home: { entities }
  } = state;
  const {
    match: {
      params: { boardId }
    }
  } = props;

  if (!entities.boards) {
    return null;
  }

  const keys = Object.keys(entities.boards);
  if (keys.length === 0) {
    return null;
  }

  if (entities.boards[keys[0]]) {
    return entities.boards[keys[0]].items.find(
      board => board.id === parseInt(boardId)
    );
  }

  return null;
};

export default {
  getBoards,
  getBoard
};
