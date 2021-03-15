import { createActions } from 'redux-actions';
import * as API from 'helpers/omdbApi';

const options = {
  prefix: 'MOVIES',
};

const moviesActions = createActions(
  {
    SET_LOADING: undefined,
  },
  options,
);

const getMovies = (payload) => async (dispatch) => {
  try {
    console.log(payload);
    // dispatch(moviesActions.setLoading(true));
    // const data = await API.getMovies();
    // console.log(data);
    // dispatch(moviesActions.setLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export default {
  ...moviesActions,
  getMovies,
};
