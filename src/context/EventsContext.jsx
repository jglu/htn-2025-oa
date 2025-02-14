import { createContext, useState, useEffect } from 'react';

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const url = 'https://api.hackthenorth.com/v3/events';

    useEffect(() => {
        // fetch api data from
        // https://api.hackthenorth.com/v3/events
        // TODO: trycatch error checking
        const fetchEvents = async() => {
            const res = await fetch(url);
            const data = await res.json();
            setEvents(data);
        }

        fetchEvents();
    }, []);

    return (
        <EventsContext value={{ events }}>
            {children}
        </EventsContext>
    )
}