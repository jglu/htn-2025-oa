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
    }, [loggedIn, events, eventsPublic])

    // for 1 event's related events, output its name
    const getEventNames = (event) => {
        if (!event) return;
        if (events.length == 0) return;

        const relatedEventIds = event.related_events

        return relatedEventIds
            .map(id => {
                const event = events.find(event => event.id === id);
                return event ? { id: event.id, name: event.name } : null;
            })
    };
    
    return (
        <div>
            {filteredEvents.map(event => (
                <EventCard
                    key={event.id}
                    event_info={event}
                    loggedIn={loggedIn}
                    relatedEventNames={getEventNames(event)}
                />
            ))}
        </div>
    );
};

export default EventList;