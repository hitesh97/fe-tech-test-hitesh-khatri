import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface FavouriteProps {
  onClick: (isFavourite: boolean) => void;
}
export const FavoriteMovie = (props: FavouriteProps) => {
  const [isFavourite, setFavourite] = useState(false);
  const onFavouriteCliecked = () => {
    setFavourite(!isFavourite);
    props.onClick(!isFavourite);
  };
  if (!isFavourite) {
    return <FavoriteBorderIcon onClick={onFavouriteCliecked} />;
  }
  return <FavoriteIcon onClick={onFavouriteCliecked} />;
};

export default FavoriteMovie;
