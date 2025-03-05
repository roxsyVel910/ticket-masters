import EventItem from './components/EventItem';
import data from '../../data/events.json';
console.log(data);
const  { _embedded: { events }} = data; //desestructuración de objetos
const Events = () => {

    const eventsComponent = events.map((eventItem)=> {
        <EventItem
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
        />
    });

    return (
        <div>
            Eventos
            num 2
            {eventsComponent}
        </div>
    )
}


export default Events;