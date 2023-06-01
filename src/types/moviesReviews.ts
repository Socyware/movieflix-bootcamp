import { User } from "./user";

export type MoviesReviews = {
  id: number;
  text: string;
  movieId: number;
  user: User;
};
