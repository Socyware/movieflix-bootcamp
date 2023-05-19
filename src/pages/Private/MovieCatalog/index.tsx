import { useParams } from "react-router-dom";
import MovieCard from "components/MovieCard";
import { MovieById } from "types/movieById";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/requests";
import "./styles.css";
import { SpringPage } from "types/vendor/spring";


type UrlParams = {
  movieId: string;
};

const MovieCatalog = () => {
  const { movieId } = useParams<UrlParams>();

  const [movieById, setMovieById] = useState<SpringPage<MovieById>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 4,
      },
    };

    requestBackend(config).then((response) => {
      setMovieById(response.data);
    });
  }, [movieId]);

  return (
    <div className="container-listmovie">
      {movieById?.content.map((movieById) => (
        <div key={movieById.id}>
          <MovieCard movieById={movieById} />
        </div>
      ))}
    </div>
  );
};

export default MovieCatalog;
