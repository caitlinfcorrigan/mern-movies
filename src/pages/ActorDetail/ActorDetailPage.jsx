import { useParams } from 'react-router';

export default function ActorDetailPage({ movies }) {
    const actor = useParams();
    const actorDetails = movies.filter(function (m) {
        return 
    }
    console.log(actorDetails)
    return (
        <h1>Actor Details</h1>
    )
}