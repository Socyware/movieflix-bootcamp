import Validation from "components/Validation";
import "./styles.css";
import TestiMony from "components/TestiMony";

const MovieDetails = () => {
  return (
    <div className="container-moviedetails">
      <div>
        <h1>Tela detalhes do filme id: 1</h1>
      </div>
        <Validation />
        <TestiMony/>
        <TestiMony/>
        <TestiMony/>
    </div>
  );
};

export default MovieDetails;
