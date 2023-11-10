import ActorCard from './ActorCard';

export default function ActorListPage({ movies }){
    // Array of casts from all movies (flattened)
    const allActors = movies.flatMap(m => m.cast);

    // Array of unique actors (from Set)
    const uniqueActors = Array.from([...new Set(allActors.map((a) => a))]);

    // Map the actors into the ActorCard component
    const actor = uniqueActors.map(a => 
        (<ActorCard actor={a} />)
    )

    return(
        <div>
            <h1>ActorListPage</h1>
            <ul>
                { actor }
            </ul>
        </div>
    )
}