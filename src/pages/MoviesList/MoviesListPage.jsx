import MovieCard from "./MovieCard";

export default function MoviesListPage({ movies }){
    const movieCards = movies.map((m, idx) => (
        <MovieCard movie={m} index={idx} key={`movie${idx}`} />
    ))
    return(
        <div>
            <h1>MoviesListPage</h1>
            <div>{movieCards}</div>
        </div>
    )
}