import { use, useEffect } from 'react';
import { EventsContext } from '../../context/EventsContext';
import { AuthContext } from '../../context/AuthContext'

import EventCard from './EventCard';

const EventList = () => {
    const { events, eventsPublic } = use(EventsContext); // both public and private events
    const { loggedIn } = use(AuthContext)
    const filteredEvents = loggedIn ? events : eventsPublic;

    // testing
    useEffect(() => {
        console.log(filteredEvents, "filteredEvents")
    })

    return (
        <div>
            {filteredEvents.map(event => (
                <EventCard key={event.id} event_info={event} />
            ))}
        </div>
    );
};

export default EventList;