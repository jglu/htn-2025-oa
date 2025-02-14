import { createContext, useState, useEffect } from 'react';

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [eventsPublic, setEventsPublic] = useState([]);
    const url = 'https://api.hackthenorth.com/v3/events';

    useEffect(() => {
        // https://api.hackthenorth.com/v3/events
        // TODO: trycatch error checking
        const fetchEvents = async() => {
            const res = await fetch(url);
            const data = await res.json();
            setEvents(data);
        }
        fetchEvents();
    }, []);

    useEffect(() => {
        setEventsPublic(events.filter(event => event.permission === "public"));
    }, [events]);

    return (
        <EventsContext value={{ events, eventsPublic }}>
            {children}
        </EventsContext>
    )
}