// TODO: add an AuthContext to check if user is logged in

import { use } from 'react';
import { EventsContext } from '../context/EventsContext';

const Events = () => {
    const { events } = use(EventsContext);

    return (
        <>
            <p>events page</p>
        </>
    )
}

export default Events
