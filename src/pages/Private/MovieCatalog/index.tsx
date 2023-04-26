import { Link } from "react-router-dom";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from 'react';
import { MovieById } from "types/movieById";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/requests";
import "./styles.css";

const MovieCatalog = () => {

  


  return (
    <div className="container-listmovie">
      <div className="listmovie-title">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div className="listmovie-details">
        <Link to="/movies/:movieid">
          <h4>Acessar /movies/1</h4>
        </Link>
        <h4>Acessar /movies/2</h4>
      </div>
      <div>
        <MovieCard/>
      </div>
    </div>
  );
};

export default MovieCatalog;
