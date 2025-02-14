// name
// start_time
// end_time
// description
// speakers
// url = `"permission"_url`
// related_events

const EventCard = ({ event_info }) => {
    const { name, start_time, end_time, description, speakers, public_url, private_url, permission } = event_info;
    const eventUrl = permission === 'public' ? public_url : private_url;

    return (
        <div>
            {name}
        </div>
    )
}

export default EventCard