import './MovieCard.css';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    const date = new Date(movie.releaseDate)
    return(
        <div class="container">
            <Link to={'/movies/' + movie.title} >
                <img src={movie.posterPath}/>
            </Link>
            <div class="centered">{ movie.title }
            <br></br>
            {date.toLocaleString('default', { month: 'long', day: 'numeric', year:'numeric' })}</div>
        </div>
    )
}