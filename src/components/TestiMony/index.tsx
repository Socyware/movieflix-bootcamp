import { ReactComponent as Star } from "assets/img/Star.svg";
import { MoviesReviews } from "types/moviesReviews";

import './styles.css';

type Props = {
  reviews: MoviesReviews;
};

const TestiMony = ({ reviews }: Props) => {
  return (
    <div className="container-testimony base-card">
      <div className="card-testimony">
        <div className="card-testimony-title">
          <Star />
          <h4>{reviews.user.name} </h4>
        </div>

        <div className="card-testimony-description">
          <h5>{reviews.text}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestiMony;
