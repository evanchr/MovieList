import { FC } from 'react';
import './BeerList.css';
import Beer from '../Beer/Beer';

interface BeerListProps {
  beers: { id: number; name: string }[];  
  removeBeer: (id: number) => void;  
}

const BeerList: FC<BeerListProps> = ({ beers, removeBeer }) => (
  <ul className="BeerList">
    {beers.map(beer => (
      <li key={beer.id} className="beer-item">
        <Beer id={beer.id} name={beer.name} />
        <button className="remove-button" onClick={() => removeBeer(beer.id)}>🗑️</button>
      </li>
    ))}
  </ul>
);

export default BeerList;
