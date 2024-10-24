import { FC } from 'react';
import './Beer.css';

interface BeerProps {
  id: number;
  name: string;
}

const Beer: FC<BeerProps> = ({ name }) => (
  <span className="Beer">
    {name}
  </span>
);

export default Beer;
