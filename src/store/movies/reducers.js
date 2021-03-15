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
    ]
  ]),
  {
    page: 1,
    movies: [],
    moviesTotal: 0,
    moviesLoading: false,
  },
);

export default moviesReducer;