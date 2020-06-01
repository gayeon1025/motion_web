import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const image = new schema.Entity('images');
export const schedule = new schema.Entity('schedules');
export const board = new schema.Entity('board', {
  author: user
});
export const boards = new schema.Entity(
  'boards',
  {
    items: [{ author: user }]
  },
  { idAttribute: 'currentPage' }
);
