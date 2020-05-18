import { denormalize } from 'normalizr';
import { board as boardSchema } from 'state/modules/home/schema';

const getBoards = (state, props) => {
  const {
    home: { entities }
  } = state;
  if (entities.boards) {
    console.log(entities.boards);
    return Object.keys(entities.boards).map(board =>
      denormalize(board, boardSchema, entities.board)
    );
  }

  return [];
};

export default {
  getBoards
};
