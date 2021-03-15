import { get } from './api-helper';

export const getMovies = (params) => get(params);
export const getMovie = (id) => get({
  i: id,
});
