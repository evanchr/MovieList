import { FC } from 'react';

interface MovieProps {
  id: number;
  name: string;
}

const Movie: FC<MovieProps> = ({ name }) => (
  <span className="Movie">
    {name}
  </span>
);

export default Movie;
