import { useParams } from 'react-router';
import CastList from './CastList';
import './MovieDetail.css';


export default function MovieDetailPage({ movies }){
    const { movieName } = useParams();
    const movie = movies.find((movie) => {
        if (movie.title === movieName) {
            return movie
        }
    })
    const date = new Date(movie.releaseDate)
    const cast = movie.cast.map((a, idx) => (
        <CastList cast={a} index={idx} key={idx} />
    ));
    return(
        <div>
            <h1>MovieDetailPage</h1>
            <img src={movie.posterPath}/>
            <div>{ movie.title }</div>
            <div>{date.toLocaleString('default', { month: 'long', day: 'numeric', year:'numeric' })}</div>
            <h4> CastList </h4>
            <ul className="CastList"><CastList cast={ cast } /></ul>
        </div>        
    )
}