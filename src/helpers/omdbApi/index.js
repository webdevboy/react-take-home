import { get } from './api-helper';

export const getMovies = (search) => get({
  s: search,
});
