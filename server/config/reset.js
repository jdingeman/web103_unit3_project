import { pool } from './database.js'
import './dotenv.js'
import eventData from '../data/events.js'
import locationData from '../data/locations.js'

const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
            )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 locations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()
    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, address, image) VALUES ($1, $2, $3)'
        }

        const values = [
            location.name,
            location.address,
            location.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }

            console.log(`✅ ${location.name} added successfully`)
        })
    })
}

const createEventsTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS events(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            location_id INT,
            CONSTRAINT fk_location FOREIGN KEY (location_id)
            REFERENCES locations(id)
            )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedEventsTable = async () => {
    await seedLocationsTable()
    await createEventsTable()
    eventData.forEach((commEvent) => {
        const insertQuery = {
            text: 'INSERT INTO events (name, date, image, description, location_id) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            commEvent.name,
            commEvent.date,
            commEvent.image,
            commEvent.description,
            commEvent.location_id
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }

        console.log(`✅ ${commEvent.name} added successfully`)
        })
    })
}

seedEventsTable()

