import { useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About/About';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, name: 'Inception' },
    { id: 2, name: 'Interstellar' },
    { id: 3, name: 'Oppenheimer' }
  ]);

  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    if (newMovie.trim() !== '') {
      const newId = movies.length ? movies[movies.length - 1].id + 1 : 1;
      setMovies([...movies, { id: newId, name: newMovie }]);
      setNewMovie(''); 
    }
  };

  const removeMovie = (id: number) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <Router>
      <div className="img-container">
      <div className="app-container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li><Link className="navbar-link" to="/">Accueil</Link></li>
            <li><Link className="navbar-link" to="/about">A propos</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <h1>Mes Films Préférées</h1>

                <div className="form-container">
                  <input
                    type="text"
                    placeholder="Ajouter un film"
                    value={newMovie}
                    onChange={(e) => setNewMovie(e.target.value)}
                    className="input-movie"
                  />
                  <button onClick={addMovie} className="add-button">Ajouter</button>
                </div>

                <MovieList movies={movies} removeMovie={removeMovie} />
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
