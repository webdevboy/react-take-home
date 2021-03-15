import { handleActions } from 'redux-actions';

export const movieReducer = handleActions(
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
    moviesLoading: false,
  },
);

export default movieReducer;