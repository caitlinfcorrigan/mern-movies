import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetailPage from '../MovieDetail/MovieDetailPage';
import MoviesListPage from '../MoviesList/MoviesListPage';
import ActorListPage from '../ActorList/ActorListPage';
import ActorDetailPage from '../ActorDetail/ActorDetailPage';
import LoginPage from '../Login/LoginPage';
import NavBar from '../../components/NavBar';
import { movies } from "../../data.js";

function App() {
  const [user, setUser] = useState("nonull");

  function addUser(username) {
    setUser([...user, username]);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MoviesListPage movies={ movies }/>} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={ movies } />} />
            <Route path="/actors" element={<ActorListPage movies={ movies } />} />
            <Route path="/actors/:actor" element={<ActorDetailPage movies={ movies } />} />
          </Routes>
        </>
        :
        <Routes>
          <Route path="/" element={<LoginPage addUser={ addUser } />} />
        </Routes>
      }
    </main>
  );
}

export default App;
