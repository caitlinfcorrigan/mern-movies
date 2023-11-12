import { useParams } from 'react-router';
import FilmList from './FilmList';

export default function ActorDetailPage({ movies }) {
    const actor = useParams();
    const actorDetails = movies.filter(m =>
        m.cast.includes(actor.actor))
    console.log(actorDetails)
    const actorMovies = actorDetails.map((m, idx) => (
        <FilmList movie= { m.title } key={ idx } />
    ))
    console.log(actorMovies)

    return (
        <div>
            <h1>{actor.actor} Details</h1>
            <ul>
                <FilmList movie= { actorMovies } />
            </ul>
        </div>

    )
}