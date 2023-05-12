import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { requestBackend } from "util/requests";
import { MoviesReviews } from "types/moviesReviews";
import Validation from "components/Validation";
import { useParams } from "react-router-dom";
import { hasAnyRoles } from "util/auth";
import TestiMony from "components/TestiMony";
import "./styles.css";

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<MoviesReviews[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: MoviesReviews) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);

  }

  return (
    <div className="container-moviedetails">
      <div>
        <h1>Tela detalhes do filme id: {movieId}</h1>

        {hasAnyRoles(["ROLE_MEMBER"]) && (
          <Validation movieId={movieId} onInsertReview={handleInsertReview} />
        )}

        <TestiMony reviews={} /> 
        
      </div>
    </div>
  );
};

export default MovieDetails;
