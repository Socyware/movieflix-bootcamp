import { Link } from "react-router-dom";
import "./styles.css";



const MovieCatalog = () => {

  return (
    <div className="container-listmovie">
      <div className="listmovie-title">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div className="listmovie-details">
        <Link to="/movies/1">
          <h4>Acessar /movies/1</h4>
        </Link>
        <Link to="/movies/2">
        <h4>Acessar /movies/2</h4>
        </Link>
      </div>
      
    </div>
  );
};

export default MovieCatalog;
