import { handleActions } from 'redux-actions';
import moviesActions from './actions';

export const moviesReducer = handleActions(
  new Map([
    [
      moviesActions.setLoading,
      (state, action) => ({
        ...state,
        loading: action.payload,
      }),
    ],
    [
      moviesActions.setMovies,
      (state, action) => ({
        ...state,
        movies: action.payload.Search,
        moviesTotal: +action.payload.totalResults,
      })
    ],
    [
      moviesActions.setField,
      (state, action) => ({
        ...state,
        [action.payload.name]: action.payload.value,
      }),
    ],
  ]),
  {
    value: '',
    year: '',
    type: '',
    page: 1,
    movies: [],
    moviesTotal: 0,
    loading: false,
  },
);

export default moviesReducer;