import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

interface WatchedMovieProps {
  onClick: (isFavourite: boolean) => void;
}

export const WatchedMovie = (props: WatchedMovieProps) => {
  const [hasWatched, setWatched] = useState(false);
  const isWatchedClicked = () => {
    setWatched(!hasWatched);
    props.onClick(!hasWatched);
  };
  if (!hasWatched) {
    return <VisibilityIcon onClick={isWatchedClicked} />;
  }
  return <VisibilityOffIcon onClick={isWatchedClicked} />;
};

export default WatchedMovie;
