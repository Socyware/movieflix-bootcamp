import { MovieById } from "types/movieById";
import "./styles.css";

export type Props = {
  movieCard: MovieById;
};


const MovieCardDetails = ({movieCard}:Props) => {
  return (
    <div className="movie-container">
      <div className="movieCardDetails-container base-card">
        <div>
          <img
            className="movieCardDetails-container-img"
            src=""
            alt=""
          />
        </div>
        <div className="movieCardDetails-container-main">
          <div>
            <h1 className="movieCardDetails-title">{movieCard.title} </h1>
          </div>
          <div>
            <h3 className="movieCardDetails-years-old"> {movieCard.year}</h3>
          </div>
          <div>
            <p className="movieCardDetails-subtitle"> {movieCard.subTitle}</p>
          </div>
          <div>
            <h6 className="movieCardDetails-">{movieCard.synopsis} </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
