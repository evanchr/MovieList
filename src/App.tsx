import React, { useState } from 'react';
import BeerList from './components/BeerList/BeerList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About/About';
import './App.css'

const App = () => {
  const [beers, setBeers] = useState([
    { id: 1, name: 'Coreff' },
    { id: 2, name: 'Corona' },
    { id: 3, name: 'Mort Subite' }
  ]);

  const [newBeer, setNewBeer] = useState('');

  const addBeer = () => {
    if (newBeer.trim() !== '') {
      const newId = beers.length ? beers[beers.length - 1].id + 1 : 1;
      setBeers([...beers, { id: newId, name: newBeer }]);
      setNewBeer(''); 
    }
  };

  const removeBeer = (id: number) => {
    setBeers(beers.filter(beer => beer.id !== id));
  };

  return (
    <Router>
      <div className="img-container">
      <div className="app-container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li><Link className="navbar-link" to="/">Home</Link></li>
            <li><Link className="navbar-link" to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <h1>Mes Bières Préférées</h1>

                <div className="form-container">
                  <input
                    type="text"
                    placeholder="Ajouter une bière"
                    value={newBeer}
                    onChange={(e) => setNewBeer(e.target.value)}
                    className="input-beer"
                  />
                  <button onClick={addBeer} className="add-button">Ajouter</button>
                </div>

                <BeerList beers={beers} removeBeer={removeBeer} />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
