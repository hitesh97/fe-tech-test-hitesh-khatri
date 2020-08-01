import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IRating, IMovies } from 'apps/fe-wtc-tech-test';
import { MovieItem } from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    wrapper: {},
    totalMoviesHead: {
      fontWeight: 'bold',
    },
    totalMoviesTitle: {
      fontSize: 'x-large',
    },
    totalMoviesTitleCount: {
      fontSize: 'large',
    },
    movieWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gridGap: '80px',
      alignItems: 'start',
      listStyle: 'none',
    },
  })
);

export interface MoviesListProps {
  movies: Array<IMovies>;
}

const MoviesList = (props: MoviesListProps) => {
  const classes = useStyles();
  return (
    <main className={classes.wrapper}>
      <div className={classes.totalMoviesHead}>
        <span className={classes.totalMoviesTitle}>Movies</span>
        <span className={classes.totalMoviesTitleCount}>
          ({props.movies.length})
        </span>
      </div>
      <ul className={classes.movieWrapper}>
        {props.movies.map((movie) => {
          return <MovieItem key={movie.imdbID} movie={movie} />;
        })}
      </ul>
    </main>
  );
};

const Home = () => {
  const moviesList = Array<IMovies>();
  const [movies, setMovies] = useState<IMovies[]>(moviesList);

  useEffect(() => {
    axios.get<Array<IMovies>>('/api/movies').then((resp) => {
      setMovies(resp.data);
    });
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
