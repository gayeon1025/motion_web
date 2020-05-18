import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const image = new schema.Entity('images');
export const board = new schema.Entity('boards', {
  author: user
});
