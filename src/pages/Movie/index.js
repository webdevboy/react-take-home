import React, { useEffect } from 'react';
import { IconButton, Container, CircularProgress } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import history from 'src/store/history';

import Actions from 'src/store/movie/actions';
import * as Selectors from 'src/store/movie/selectors';
import './Movie.scss';


const {
  getMovie
} = Actions;

function MoviePage() {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(Selectors.selectLoading);
  const movie = useSelector(Selectors.selectMovie);
  useEffect(() => {
    if(params?.id) {
      dispatch(getMovie(params.id));
    }
  }, [])

  return (
    <div className="app-movie">
      <Container>
        <IconButton onClick={history.goBack}>
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
        {loading && (
          <div className="app-movie__loading">
            <CircularProgress size="300" />
          </div>
        )}
        {movie && !loading && (
          <div className="app-movie__movie">
            {movie.Poster === 'N/A' && <div className="app-movie__movie__poster__empty">No Poster</div>}
            {movie.Poster !== 'N/A' && <img className="app-movie__movie__poster" src={movie.Poster} alt="Poster" />}
            <div className="app-movie__movie__info">
              <div className="app-movie__movie__info__title">
                {movie.Title}
              </div>
              <div className="app-movie__movie__info__item">
                <b>IMDB Rating:</b> {movie.imdbRating}
              </div>
              <div className="app-movie__movie__info__item">
                <b>Year:</b> {movie.Year}
              </div>
              <div className="app-movie__movie__info__item">
                <b>Released:</b> {movie.Released}
              </div>
              <div className="app-movie__movie__info__item">
                <b>Type:</b> {movie.Type}
              </div>
              <div>
                <b>Country:</b> {movie.Country}
              </div>
              <div className="app-movie__movie__info__item">
                <b>Genre:</b> {movie.Genre}
              </div>
              <div className="app-movie__movie__info__item">
                <b>Actors:</b> {movie.Actors}
              </div>
              <div className="app-movie__movie__info__item">
                <b>Description:</b> {movie.Plot}
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default MoviePage;
