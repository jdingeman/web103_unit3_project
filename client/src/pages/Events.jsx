import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await EventsAPI.getAllEvents()
            setEvents(data)
        }

        fetchEvents()
    }, [])

    return (
        <div className="location-events">
            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            date={event.date}
                            time={event.event_time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events