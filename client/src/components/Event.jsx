import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'

const Event = (props) => {

    const [event, setEvent] = useState({})
    const [time, setTime] = useState([])
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const formattedDate = event.date ? new Date(event.date).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }) : '';

    const formattedTime = event.event_time ? new Date(`1970-01-01T${event.event_time}`).toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit'
    }) : '';

    return (
        <article className='event-information'>
            <img src={event.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.name}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {formattedDate} <br /> {formattedTime}</p>
                    <p className="event-description">{event.description}</p>
                </div>
            </div>
        </article>
    )
}

export default Event