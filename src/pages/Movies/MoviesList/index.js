import React from 'react';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import './MoviesList.scss';

function MoviesList({ movies, total, page, paginationChange }) {
  return (
    <div className="app-movie-list">
      {(!movies || movies.length === 0) && <div className="app-movie-list__empty">No Movies</div>}
      {movies?.length > 0 && movies.map(movie => (
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="app-movie-list__movie">
          <div className="app-movie-list__movie__poster">
            {movie.Poster === 'N/A' && <div className="app-movie-list__movie__poster__empty">No Poster</div>}
            {movie.Poster !== 'N/A' && <img src={movie.Poster} alt="poster" />}
          </div>
          
          <div className="app-movie-list__movie__info">
            <div className="app-movie-list__movie__info__title">{movie.Title}</div>
            <div>Year: {movie.Year}</div>
            <div>Type: {movie.Type}</div>
          </div>
        </Link>
      ))}
      {movies?.length > 0 && (
        <div className="app-movie-list__pagination">
          <Pagination count={Math.ceil(total / 10)} page={page} onChange={paginationChange} color="primary" />
        </div>
      )}
    </div>
  );
}

export default MoviesList;
