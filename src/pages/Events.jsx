import EventList from '../components/Events/EventList';

import './page.css'

const Events = () => {
    return (
        <div className="page">
            <h1>previous events</h1>
            <p>
                <strong>Hackathon Global Inc.™</strong> has spent the last decade pouring its
                heart and soul into bringing <i>your</i> favorite hackathon to life.
                Take a trip down memory lane with our past events—we can't wait
                to see you at the next one!
            </p>
            <EventList />
        </div>
    )
}

export default Events
