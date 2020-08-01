import React, { useState } from 'react';
import { IMovies } from 'apps/fe-wtc-tech-test';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FavoriteMovie,
  WatchedMovie,
  StarRating,
} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';

interface WatchedMovieProps {
  movie: IMovies;
}

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    movieItem: {
      borderRadius: '20px',
      backgroundColor: '#FFF',
      padding: '.5rem',
      minHeight: '300px',
      minWidth: '200px',
      Width: '200px',
      boxShadow: '5px 5px 8px #888888',
    },
    movieItemWatchedNotSaved: {
      backgroundColor: '#EEC907',
    },
    movieItemWatchedAndtSaved: {
      backgroundColor: '#049452',
    },
    movieItemSavedNotWatched: {
      backgroundColor: '#ED6606',
    },
    moviePoster: {
      borderRadius: '10px',
      backgroundColor: 'green',
      minHeight: '221px',
      minWidth: '150px',
      Width: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    },
    favoutiteContainer: {
      minHeight: '30px',
      textAlign: 'center',
    },
    starRatingContainer: {
      minHeight: '30px',
      textAlign: 'center',
      marginTop: '5px',
    },
    watched: {
      float: 'left',
      marginLeft: '10px',
    },
    favouriteItem: {
      float: 'right',
      marginRight: '10px',
    },
  })
);

export const MovieItem = (props: WatchedMovieProps) => {
  const classes = useStyles();
  const [hasWatched, setWatched] = useState(false);
  const [isFavourite, setIsFavoutrite] = useState(false);
  const { movie } = props;
  const calculateClassName = () => {
    const classNames = [classes.movieItem];
    if (hasWatched && !isFavourite)
      classNames.push(classes.movieItemWatchedNotSaved);
    if (!hasWatched && isFavourite)
      classNames.push(classes.movieItemSavedNotWatched);
    if (hasWatched && isFavourite)
      classNames.push(classes.movieItemWatchedAndtSaved);
    return classNames.join(' ');
  };

  return (
    <li className={calculateClassName()}>
      <div className={classes.favoutiteContainer}>
        <div className={classes.watched}>
          <WatchedMovie
            onClick={(isWatched) => {
              setWatched(isWatched);
            }}
          />
        </div>
        <div className={classes.favouriteItem}>
          <FavoriteMovie
            onClick={(isFavourite) => {
              setIsFavoutrite(isFavourite);
            }}
          />
        </div>
      </div>
      <img
        className={classes.moviePoster}
        width="150"
        height="221"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className={classes.starRatingContainer}>
        <StarRating rating={movie.imdbRating} Ratings={movie.Ratings} />
      </div>
    </li>
  );
};

export default MovieItem;
