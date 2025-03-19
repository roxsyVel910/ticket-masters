
import EventItem from './components/EventItem';
import data from '../../data/events.json';

const { _embedded: { events } } = data; //desestructuración de objetos

const Events = ({ searchTerm }) => {
  
    const handleEventClick = (id) => {
        console.log('click', id);  
    };
    const renderEvent = () => {       
        let eventsFiltered = events;
        if(searchTerm.length > 0) {
            eventsFiltered = events.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return eventsFiltered.map((eventItem) => {
            return <EventItem
                key={`event-item-${eventItem.id}`}
                id={eventItem.id}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventClick}
            />
        });
};
    return (
        <div>
            Eventos
            {renderEvent()}
        </div>
    );
};


export default Events;