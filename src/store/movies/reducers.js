import { handleActions } from 'redux-actions';

export const moviesReducer = handleActions(
  new Map([
    // [
    //   venueActions.setLoading,
    //   (state, action) => ({
    //     ...state,
    //     loading: action.payload,
    //     error: null,
    //   }),
    // ],
  ]),
  {
    movies: [],
  },
);

export default moviesReducer;