import { use, useState, useEffect } from 'react';
import { EventsContext } from '../context/EventsContext';
import { AuthContext } from '../context/AuthContext'

const Events = () => {
    const { events } = use(EventsContext); // both public and private events
    const { loggedIn } = use(AuthContext)
    const [publicEvents, setPublicEvents] = useState([]); // public-only events

    useEffect(() => {
        setPublicEvents(events.filter(event => event.permission === "public"));
    }, [events])

    return (
        <>
            <h1>Previous Events</h1>
        </>
    )
}

export default Events
