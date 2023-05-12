import { MovieById } from 'types/movieById';
import './styles.css';

type Props = {
   
   movies: MovieById;
  
}

const MovieCard = ({movies} : Props) => {

   return (
   <div>
     <p>{movies.id}</p>
     <h3>{movies.title}</h3>
     <h5>{movies.subTitle}</h5>
     <h5>{movies.year}</h5>
     <div>{movies.imgUrl}</div>
   
  
   </div>
   
   );   
};

export default MovieCard;

