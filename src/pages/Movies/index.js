import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'src/store/movies/actions';
import * as Selectors from 'src/store/movies/selectors';

const {
  getMovies
} = Actions;

function MoviesPage() {
  const page = useSelector(Selectors.selectPage);
  const movies = useSelector(Selectors.selectMovies);
  const moviesTotal = useSelector(Selectors.selectMoviesTotal);
  const dispatch = useDispatch();

  console.log(movies, moviesTotal);

  const handleGetMovies = () => {
    const params = {
      s: 'ase',
      page: 2,
    };
    dispatch(getMovies(params))
  }
  return (
    <div>
      <button onClick={handleGetMovies}>Get movies</button>
    </div>
  )
}

export default MoviesPage;
