import { useState } from 'react';
import "./MovieList.css";
import MovieListItem from "./MovieListItem";

const initMovies = [
  {
    id: 1,
    title: "Killers of the Flower Moon",
    director: "Martin Scorcese",
    runtime: 3.26,
    rating: 5,
  },
  {
    id: 2,
    title: "Asteroid City",
    director: "Wes Anderson",
    runtime: 1.45,
    rating: 4,
  },
  {
    id: 3,
    title: "The Whale",
    director: "Darren Aronofsky",
    runtime: 1.57,
    rating: 5,
  },
];

export default function MovieList() {
  const [movies, setMovies] = useState(initMovies);

  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}