import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetailPage from '../MovieDetail/MovieDetailPage';
import MoviesListPage from '../MoviesList/MoviesListPage';
import ActorListPage from '../ActorList/ActorListPage';
import LoginPage from '../Login/LoginPage';

function App() {
  const [user, setUser] = useState();

  function addUser(username) {
    setUser([...user, username]);
  }

  return (
    <main className="App">
      { user ?
        <Routes>
          <NavBar/>
          <Route path="/" element={<MoviesListPage />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorListPage />} />
        </Routes>
        :
        <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      }
    </main>
  );
}

export default App;
