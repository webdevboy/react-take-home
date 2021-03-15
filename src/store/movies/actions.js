import { createActions } from 'redux-actions';
import * as omdbApi from 'src/helpers/omdbApi';

const options = {
  prefix: 'MOVIES',
};

const moviesActions = createActions(
  {
    SET_LOADING: undefined,
    SET_MOVIES: undefined,
    SET_FIELD: undefined,
  },
  options,
);

const getMovies = (params) => async (dispatch) => {
  try {
    dispatch(moviesActions.setLoading(true));
    const data = await omdbApi.getMovies(params);
    console.log(data);
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
