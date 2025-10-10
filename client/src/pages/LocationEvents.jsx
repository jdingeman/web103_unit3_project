import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const fetchLocation = async () => {
            const data = await LocationsAPI.getLocationById(id)
            setLocation(data)
        }

        const fetchEvents = async () => {
            const data = await LocationsAPI.getEventsByLocation(id)
            setEvents(data)
        }

        fetchLocation(id)
        fetchEvents(id)
    }, [id])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

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
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents