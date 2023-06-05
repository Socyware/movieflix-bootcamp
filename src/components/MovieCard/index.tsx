import { MovieById } from "types/movieById";
import "./styles.css";

 export type Props = {
  movieById: MovieById;
};

const MovieCard = ({ movieById }: Props) => {
  return (
    <div className="movie-container">
      <div className="movieCard-container">
        <div>
          <img
            className="movieCard-container-img"
            src={movieById.imgUrl}
            alt=""
          />
        </div>
        <div className="movieCard-container-main">
          <div>
            <h1 className="movieCard-title">{movieById.title}</h1>
          </div>
          <div>
            <h3 className="movieCard-years-old">{movieById.year}</h3>
          </div>
          <div>
            <p className="movieCard-subtitle">{movieById.subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
