const EventItem = ({ info, name, image , id, onEventClick}) => {
  
    return (
        <div>
            <img src={image} alt={name} style={{width: '200px'}} />
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={(evt)=> {
                evt.stopPropagation();
                onEventClick(id);
            }}
                > Ver mas</button>
        </div>
    )
}

export default EventItem;