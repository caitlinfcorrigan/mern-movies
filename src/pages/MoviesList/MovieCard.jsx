import './MovieCard.css';
export default function MovieCard({ movie }) {
    const date = new Date(movie.releaseDate)
    return(
        <div class="container">
            <img src={movie.posterPath}/>
            <div class="centered">{ movie.title }<br></br>{date.toLocaleString('default', { month: 'long', day: 'numeric', year:'numeric' })}</div>
        </div>
    )
}