import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface MoviesCounterProps {
  moviesCount: number;
}

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
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

export const MoviesCounter = (props: MoviesCounterProps) => {
  const classes = useStyles();
  return (
    <div className={classes.totalMoviesHead}>
      <span className={classes.totalMoviesTitle}>Movies</span>
      <span className={classes.totalMoviesTitleCount}>
        ({props.moviesCount})
      </span>
    </div>
  );
};

export default MoviesCounter;
