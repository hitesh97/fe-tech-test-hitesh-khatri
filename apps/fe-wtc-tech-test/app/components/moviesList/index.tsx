import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IMovies } from 'apps/fe-wtc-tech-test';
import {
  MovieItem,
  MoviesCounter,
} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';

export interface MoviesListProps {
  movies: Array<IMovies>;
}

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    wrapper: {},
    movieWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gridGap: '80px',
      alignItems: 'start',
      listStyle: 'none',
    },
  })
);

export const MoviesList = (props: MoviesListProps) => {
  const classes = useStyles();
  return (
    <main className={classes.wrapper}>
      <MoviesCounter moviesCount={props.movies.length} />
      <ul className={classes.movieWrapper}>
        {props.movies.map((movie) => {
          return <MovieItem key={movie.imdbID} movie={movie} />;
        })}
      </ul>
    </main>
  );
};

export default MoviesList;
