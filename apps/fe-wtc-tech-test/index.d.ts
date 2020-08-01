declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

export interface IRating {
  source: string;
  Value: string;
}

export interface IMovies {
  imdbID: string;
  Title: string;
  Poster: string;
  imdbRating: number;
  Ratings: Array<IRating>;
}
