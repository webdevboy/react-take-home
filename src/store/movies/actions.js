import { createActions } from 'redux-actions';
import * as API from 'src/helpers/omdbApi';

const options = {
  prefix: 'MOVIES',
};

const moviesActions = createActions(
  {
    SET_LOADING: undefined,
    SET_MOVIES: undefined,
  },
  options,
);

const getMovies = (params) => async (dispatch) => {
  try {
    console.log(params);
    dispatch(moviesActions.setLoading(true));
    const data = await API.getMovies(params);
    dispatch(moviesActions.setMovies(data));
    dispatch(moviesActions.setLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export default {
  ...moviesActions,
  getMovies,
};
