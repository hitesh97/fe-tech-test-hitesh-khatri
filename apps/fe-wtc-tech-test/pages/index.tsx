import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { IMovies } from 'apps/fe-wtc-tech-test';
import {
  MoviesList,
  FilterMenu,
} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    wrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 6fr',
      gridGap: '20px',
      alignItems: 'start',
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const moviesList = Array<IMovies>();
  const [movies, setMovies] = useState<IMovies[]>(moviesList);

  useEffect(() => {
    axios.get<Array<IMovies>>('/api/movies').then((resp) => {
      setMovies(resp.data);
    });
  }, []);

  return (
    <main className={classes.wrapper}>
      <FilterMenu />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
