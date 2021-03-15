import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import configureStore from './config';
import history from './history';

import moviesReducer from './movies/reducers';
import movieReducer from './movie/reducers';

const initialState = window.initialReduxState;

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  router: connectRouter(history),
})

const { store } = configureStore(history, initialState, rootReducer);

export { store, history };
