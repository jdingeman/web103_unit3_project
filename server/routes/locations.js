import express from 'express'
import LocationsController from '../controllers/locations.js'

const router = express.Router()

router.get('/', LocationsController.getLocations)

router.get('/:locationId', LocationsController.getLocationById)

router.get('/:locationId/events', LocationsController.getEventsByLocation)

export default router