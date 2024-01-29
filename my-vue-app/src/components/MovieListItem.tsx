interface Props {
    movie: {
        id: number;
        title: string;
        director: string;
        runtime: number;
        rating: number;
    };
}

export default function MovieListItem({ movie }: Props) {
    return (
        <div className="movie-card">
            <h2>Title: {movie.title}</h2>
            <h5>Director: {movie.director}</h5>
            <span>Runtime: {movie.runtime}</span>
            <div>{movie.rating && "*".repeat(movie.rating)}</div>
        </div>
    );
}