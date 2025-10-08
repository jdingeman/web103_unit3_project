import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM events ORDER BY id ASC'
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(404).json( { error: error.message })
    }
}

const getEventById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT name, date, image, description, location_id
            FROM events
            WHERE id=$1
        `
        const eventId = req.params.eventId
        const results = await pool.query(selectQuery, [eventId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status.json( { error: error.message })
    }
}


export default {
    getEvents,
    getEventById
}