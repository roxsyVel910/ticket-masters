const EventItem = ({ info, name, image , id, onEventClick}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={(()=> onEventClick(id))}> Ver mas</button>
        </div>
    )
}

export default EventItem;