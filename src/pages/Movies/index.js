import React from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from 'store/movies/actions';

function MoviesPage() {
  const dispatch = useDispatch();
  console.log(getMovies);
  return (
    <div>Movies Page</div>
  )
}

export default MoviesPage;
