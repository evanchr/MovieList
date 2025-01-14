import { FC } from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

interface MovieListProps {
  movies: { id: number; name: string }[];  
  removeMovie: (id: number) => void;  
}

const MovieList: FC<MovieListProps> = ({ movies, removeMovie }) => (
  <ul className="MovieList">
    {movies.map(movie => (
      <li key={movie.id} className="movie-item">
        <Movie id={movie.id} name={movie.name} />
        <button className="remove-button" onClick={() => removeMovie(movie.id)}>🗑️</button>
      </li>
    ))}
  </ul>
);

export default MovieList;
