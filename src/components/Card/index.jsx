

export function Card({card,imagen,p,t}){
    
    return(
        <div className="card" style={card}>
            <h1>{t}</h1>
            <p>{p}</p>
            <span>
                <img src={imagen} alt="" />
            </span>
        </div>
    )
}