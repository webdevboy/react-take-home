import { createActions } from 'redux-actions';
import * as omdbApi from 'src/helpers/omdbApi';

const options = {
  prefix: 'MOVIE',
};

const movieActions = createActions(
  {
    SET_LOADING: undefined,
    SET_MOVIE: undefined,
  },
  options,
);

const getMovie = (id) => async (dispatch) => {
  try {
    dispatch(movieActions.setLoading(true));
    const data = await omdbApi.getMovie(id);
    console.log(data);
    dispatch(movieActions.setMovie(data));
    dispatch(movieActions.setLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export default {
  ...movieActions,
  getMovie,
};
