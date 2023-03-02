import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import config_axios from './config_axios';
import './pages.css';
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

const Movie = ({ url }) => {
  const base_img = 'https://image.tmdb.org/t/p/w300/';
  const classes = useStyle();

  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await config_axios.get(url);
      setMovies(request.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className='row'>
      {movies.length === 0 ? (
        <h4 className={classes.loading}>Loading....</h4>
      ) : (
        movies.map((movies) => {
          return (
            <div className='card'>
              <div>
                <img
                  src={`${base_img}${movies.poster_path}`}
                  className='card__image'
                  alt={movies.original_title}
                  key={movies.id}
                />
              </div>

              <div className='card__content'>
                <h1 className='card__title'>
                  {movies.title}
                  {movies.original_name}
                </h1>
                <hr />
                <h2>Overview</h2>
                <div className='card__desc'>{movies.overview}</div>
                <h4 className='card__date'>
                  Release Date : {movies.release_date}
                </h4>
                <h4 className='card__rating'>Rating {movies.vote_average}</h4>
                <hr />

                <Button
                  variant='contained'
                  color='primary'
                  movies={movies}
                  onClick={() => history.push(`/DetailMovies/${movies.id}`)}
                >
                  Detail
                </Button>
              </div>
            </div>
          );
        })
      )}
      {/* {
      movies.map((movies) => {
        return (
          <div className='card'>
            <div>
              <img
                src={`${base_img}${movies.poster_path}`}
                className='card__image'
                alt={movies.original_title}
                key={movies.id}
              />
            </div>

            <div className='card__content'>
              <h1 className='card__title'>
                {movies.title}
                {movies.original_name}
              </h1>
              <hr />
              <h2>Overview</h2>
              <div className='card__desc'>{movies.overview}</div>
              <h4 className='card__date'>
                Release Date : {movies.release_date}
              </h4>
              <h4 className='card__rating'>Rating {movies.vote_average}</h4>
              <hr />

              <Button
                variant='contained'
                color='primary'
                movies={movies}
                onClick={() => history.push(`/DetailMovies/${movies.id}`)}
              >
                Detail
              </Button>
            </div>
          </div>
        );
      })
      } */}
    </div>
  );
};

Movie.propTypes = {
  url: PropTypes.string,
};

export default Movie;
