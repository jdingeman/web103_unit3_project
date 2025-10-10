const getAllLocations = async() => {
    const response = await fetch('/api/locations')
    const data = await response.json()
    return data
}

const getLocationById = async (id) => {
    const response = await fetch(`/api/locations/${id}`)
    const data = await response.json()
    return data
}

const getEventsByLocation = async (locationId) => {
    const response = await fetch(`/api/locations/${locationId}/events`)
    const data = await response.json()
    return data
}

export default {
    getAllLocations,
    getLocationById,
    getEventsByLocation
}