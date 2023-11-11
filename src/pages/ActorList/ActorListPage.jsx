import ActorCard from './ActorCard';
import "./ActorList.css";

export default function ActorListPage({ movies }){
    // Array of casts from all movies (flattened)
    const allActors = movies.flatMap(m => m.cast);

    // Array of unique actors (from Set)
    const uniqueActors = Array.from([...new Set(allActors.map((a) => a))]);

    // Map the actors into the ActorCard component
    const actor = uniqueActors.map((a, idx) => 
        (<ActorCard actor={a} key={'Actor' + idx} />)
    )
    return(
        <div>
            <h1>ActorListPage</h1>
            <ul className='ActorList'>
                { actor }
            </ul>
        </div>
    )
}