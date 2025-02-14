import './EventCard.css'
import linkIcon from "../../assets/link-24x24.png";

const EventCard = ({ event_info, loggedIn, relatedEventNames }) => {
    const {
        id,
        name,
        event_type,
        start_time,
        end_time,
        description,
        speakers,
        public_url,
        private_url,
    } = event_info;

    // displays in 1 day or 2 days depending on if it spans
    // - fixed Waterloo time since HTN hosts from Waterloo (even though this
    //      was all virtual and it could have been other time zones,
    //      using Waterloo time (EST/EDT) to be consistent)
    const eventTime = (start_time, end_time) => {
        // start and end dates only (no time) (mm/dd/yyyy)
        const startDateOnly = new Date(start_time).toLocaleDateString("en-US", {
            timeZone: "America/Toronto",
            year: "numeric",
            month: "short",
            day: "numeric"
        });
        const endDateOnly = new Date(end_time).toLocaleDateString("en-US", {
            timeZone: "America/Toronto",
            year: "numeric",
            month: "short",
            day: "numeric"
        });

        // start and end time (no date) (hh:mm AM/PM)
        const startTimeOnly = new Date(start_time).toLocaleTimeString("en-US", {
            timeZone: "America/Toronto",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
        const endTimeOnly = new Date(end_time).toLocaleTimeString("en-US", {
            timeZone: "America/Toronto",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });

        // bc of daylight savings, sometimes EST and sometimes EDT
        const timeZoneAbbr = new Date(start_time).toLocaleTimeString("en-US", {
            timeZone: "America/Toronto",
            timeZoneName: "short"
        }).split(" ")[2];

        if (startDateOnly === endDateOnly) {
            return `${startDateOnly}, ${startTimeOnly} - ${endTimeOnly} ${timeZoneAbbr}`;
        } else {
            return `${startDateOnly}, ${startTimeOnly} - ${endDateOnly}, ${endTimeOnly} ${timeZoneAbbr}`;
        }
    };

    const copyAnchorLink = () => {
        const eventLink = `${window.location.origin}${window.location.pathname}#event-${id}`;
        navigator.clipboard.writeText(eventLink)
    };

    const randomGradient = () => {
        const colors = ["#9bb1fc", "#6e8df9"]; // from htn
        const randomDeg = Math.floor(Math.random() * 360);
        return `linear-gradient(${randomDeg}deg, ${colors[0]}, ${colors[1]})`;
    };

    return (
        <div className="event-card" id={`event-${id}`} style={{ background: randomGradient() }}>
            <div className="event-header">
                <h2 className="event-title">
                    <a href={`#event-${id}`} className="anchor-link">{name}</a>
                </h2>
                <button onClick={copyAnchorLink} className="copy-link-button" title="Copy event link">
                    <img src={linkIcon} className="copy-link-icon" />
                </button>
            </div>

            <h4 className="event-type">\\ {event_type.replace("_", " ").toUpperCase()}</h4>

            {speakers.length > 0 && (
                <h4 className="event-speakers">
                    <strong>\\ Speaker:</strong> {speakers.map((s) => s.name).join(", ")}
                </h4>
            )}

            <p className="event-time">
                {eventTime(start_time, end_time)}
            </p>

            {description && <p className="event-description">{description}</p>}

            <br />
            <hr />
            <br />

            {public_url && (
                <p className="event-url">
                    <strong>Event URL:</strong>{" "}
                    <a href={public_url} target="_blank" rel="noopener noreferrer">
                        {public_url}
                    </a>
                </p>
            )}

            {loggedIn && private_url && (
                <p className="hacker-url">
                    <strong>Hacker URL:</strong>{" "}
                    <a href={private_url} target="_blank" rel="noopener noreferrer">
                        {private_url}
                    </a>
                </p>
            )}

            {relatedEventNames.length > 0 && (
                <div className="event-related">
                    <strong>Related Events:</strong>
                    <ul>
                        {relatedEventNames.map((event) => (
                            <li key={event.id}><a href={`#event-${event.id}`}>{event.name}</a></li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EventCard;