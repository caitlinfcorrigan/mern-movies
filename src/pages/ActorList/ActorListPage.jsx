import ActorCard from "./ActorCard";

export default function ActorListPage({ movies }){
    const allActors = movies.map((m) => {
        m.cast.map(a => a)
    } )
    const actors = [...new Set(allActors.map(a => a ))]
    return(
        <div>
            <h1>ActorListPage</h1>
            <ul>
                <ActorCard actors={ actors }/>
            </ul>
        </div>
    )
}