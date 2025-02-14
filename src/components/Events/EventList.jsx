import { use, useEffect, useState } from 'react';
import { EventsContext } from '../../context/EventsContext';
import { AuthContext } from '../../context/AuthContext'

import EventCard from './EventCard';

const EventList = () => {
    const { events, eventsPublic } = use(EventsContext);
    const { loggedIn } = use(AuthContext)
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        setFilteredEvents(loggedIn ? events : eventsPublic);
    }, [events, eventsPublic])

    return (
        <div>
            {filteredEvents.map(event => (
                <EventCard key={event.id} event_info={event} />
            ))}
        </div>
    );
};

export default EventList;