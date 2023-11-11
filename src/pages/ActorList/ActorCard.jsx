import { Link } from 'react-router-dom';

export default function ActorCard({ actor }) {
    return (
        <Link to={'/actors/' + actor }>
            <li>{actor}</li>
        </Link>    
    )
}