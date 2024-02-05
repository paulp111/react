import { useState, useEffect } from "react";
import { IMovie } from "../ts/interfaces/global_interface";
import MovieList from "./MovieList";

export default function MovieListContainer() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [err, setErr] = useState<Error | null>(null);
  
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };

        useEffect(() => {
            (async () => {
                try {
                    const data = await fetch('/movies', options);
                    setMovies((await data.json()) as IMovie[]);
                } catch (error) {
                    setErr(error as Error);
                }
            })();
        }, []);

        const handlerating = (id: number, rating: number): void => {
            setMovies((prevMovie) => {
                return prevMovie.filter((movie) => {
                    if (movie.id === id) movie.rating = rating;
                    return movie;
                });
            });
        };
        return <MovieList movies={movies} err={err} handleRating={handlerating} />;
    }