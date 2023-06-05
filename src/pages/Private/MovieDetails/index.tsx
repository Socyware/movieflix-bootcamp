import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { requestBackend } from "util/requests";
import { MoviesReviews } from "types/moviesReviews";
import Validation from "components/Validation";
import { useParams } from "react-router-dom";
import TestiMony from "components/TestiMony";
import { SpringPage } from "types/vendor/spring";
import { MovieById } from "types/movieById";
import "./styles.css";
import MovieCardDetails from "components/MovieCardDetails";

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [movieCard, setmovieCard] = useState<SpringPage<MovieById>>();

  const [reviews, setReviews] = useState<MoviesReviews[]>([]);

  useEffect(() => {
    const configMovie: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(configMovie).then((response) => {
      setmovieCard(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const configReviews: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(configReviews).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: MoviesReviews) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="container-moviedetails">
      <div>
        {movieCard?.content.map((movieCard) => (
          <div key={movieCard.id}>
            <MovieCardDetails movieCard={movieCard} />
          </div>
        ))}

        <div>
          <Validation movieId={movieId} onInsertReview={handleInsertReview} />
        </div>
      </div>

      {reviews.map((reviews) => (
        <div key={reviews.id}>
          <TestiMony reviews={reviews} />
        </div>
      ))}
    </div>
  );
};

export default MovieDetails;
