import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, TextField, Select, MenuItem, Button, CircularProgress } from '@material-ui/core';
import Actions from 'src/store/movies/actions';
import * as Selectors from 'src/store/movies/selectors';

import './Movies.scss';
import MoviesList from './MoviesList';

const {
  getMovies,
  setField,
} = Actions;

function MoviesPage() {
  const [valueError, setValueError] = useState('');
  const page = useSelector(Selectors.selectPage);
  const movies = useSelector(Selectors.selectMovies);
  const moviesTotal = useSelector(Selectors.selectMoviesTotal);
  const value = useSelector(Selectors.selectValue);
  const year = useSelector(Selectors.selectYear);
  const type = useSelector(Selectors.selectType);
  const loading = useSelector(Selectors.selectLoading);
  const dispatch = useDispatch();

  const validateTitle = (valueToValidate) => {
    let isValid = true;
    
    if(valueToValidate === '') {
      isValid = false;
      setValueError('Title is required');
    }
    else if(valueToValidate.length < 4) {
      isValid = false;
      setValueError('Title length must be greater than 4');
    }

    if(isValid) {
      setValueError('');
    }
    return isValid;
  }

  const handleGetMovies = (resetPage = true) => {
    if(!validateTitle(value)) return;
    const params = {
      s: value,
      y: year,
      type,
      page: resetPage ? 1 : page,
    };
    if(resetPage) {
      changePagination(null, 1);
    }
    dispatch(getMovies(params))
  }

  const changeField = (name, value) => {
    
    validateTitle(value);
    dispatch(setField({
      name,
      value,
    }));
    
  };

  const changePagination = (event, value) => {
    dispatch(setField({
      name: 'page',
      value,
    }));
  }

  useEffect(() => {
    if(page && page !== 1) {
      handleGetMovies(false);
    }
  }, [page]);
  return (
    <div className="app-movies">
      <Container>
        <div className="app-movies__search-group">
          <div className="app-movies__search-group__inputs">
            <div className="app-movies__search-group__inputs__title">
              <TextField error={!!valueError && valueError !== ''} label="Movie title" value={value} onChange={e => changeField('value', e.target.value)} />  
            </div>
            <div className="app-movies__search-group__inputs__year">
              <TextField type="number" label="Year" value={year} onChange={e => changeField('year', e.target.value)} />
            </div>
            <Select
              value={type}
              displayEmpty
              onChange={e => changeField('type', e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="series">Series</MenuItem>
              <MenuItem value="episode">Episode</MenuItem>
            </Select>   
          </div>
          <Button variant="contained" color="primary" onClick={handleGetMovies} className="app-movies__search-group__submit">
            {!loading && 'Search'}
            {loading && <CircularProgress color="inherit" size={25} />}
          </Button>
        </div>
        {valueError && <div className="error">{valueError}</div>}
        <div>
          <MoviesList {...{
            movies,
            total: +moviesTotal,
            page,
            paginationChange: changePagination,
          }} />
        </div>
      </Container>
    </div>
  )
}

export default MoviesPage;
