import { ReactComponent as Star } from "assets/img/Star.svg";
import "./styles.css";



const TestiMony = () => {
  return (
    <div className="container-testimony base-card">
      <div className="card-testimony">
        <div className="card-testimony-title">
          <Star /><h4>Maria</h4>
        </div>
        <div className="card-testimony-description">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, maiores accusamus? In veniam eaque laudantium quidem
            vero sit, obcaecati at repudiandae ex tempore exercitationem, cum
            voluptatum error recusandae itaque totam!
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TestiMony;
