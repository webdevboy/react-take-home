import { handleActions } from 'redux-actions';

export const rootReducer = handleActions(
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

export default rootReducer;