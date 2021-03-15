import { handleActions } from 'redux-actions';
import movieActions from './actions';

export const movieReducer = handleActions(
  new Map([
    [
      movieActions.setLoading,
      (state, action) => ({
        ...state,
        loading: action.payload,
      }),
    ],
    [
      movieActions.setMovie,
      (state, action) => ({
        ...state,
        movie: action.payload,
      }),
    ],
  ]),
  {
    loading: false,
    movie: null,
  },
);

export default movieReducer;