import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { IRating } from 'apps/fe-wtc-tech-test';
import evaluateRatingByExpression from './ratingCalculator';

interface IStarRating {
  rating: number;
  Ratings: Array<IRating>;
}
export const StarRating = (props: IStarRating) => {
  const MAX_STAR_RATING = 5;

  const calculateAverage = (ratings: Array<IRating>): number => {
    const percentiles = ratings
      .map((rating) => rating.Value) // value contains % value or value out of 10 or 100..
      .map((ratingValue) => {
        return evaluateRatingByExpression(ratingValue) * 100;
      });
    const averageRating =
      percentiles.reduce((p, c) => p + c, 0) / percentiles.length;
    return Math.round(averageRating);
  };
  const averageRating = calculateAverage(props.Ratings);

  const noOfFullStars = Math.round(averageRating / 20);
  let noOfHalfStars = MAX_STAR_RATING - noOfFullStars;
  if (noOfHalfStars > 1) noOfHalfStars = 1;
  const noOfEmptyStar = MAX_STAR_RATING - (noOfFullStars + noOfHalfStars);

  const fullIcons = Array<JSX.Element>();
  for (let index = 0; index < noOfFullStars; index++) {
    fullIcons.push(<StarIcon key={`rating-full-${index}`} />);
  }

  const halfIcons = Array<JSX.Element>();
  if (noOfHalfStars > 0) {
    for (let index = 0; index < noOfHalfStars; index++) {
      fullIcons.push(<StarHalfIcon key={`rating-half-${index}`} />);
    }
  }

  const emptyIcons = Array<JSX.Element>();
  if (noOfEmptyStar > 0) {
    for (let index = 0; index < noOfEmptyStar; index++) {
      emptyIcons.push(<StarBorderIcon key={`rating-empty-${index}`} />);
    }
  }
  return (
    <div>
      {fullIcons}
      {halfIcons}
      {emptyIcons}
    </div>
  );
};

export default StarRating;
