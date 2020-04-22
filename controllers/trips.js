const tripsRouter = require('express').Router()
const Trip = require('../models/trip')

tripsRouter.get('/', async (request, response) => {
    const trips = await Trip.find({})
    response.json(trips.map(trip => trip.toJSON()))
})

tripsRouter.post('/', async (request, response) => {
    const body = request.body

    const trip = new Trip ({
       city: body.city,
       country: body.country,
       price: body.price,
       rating: body.rating
    })

    try {
        const savedTrip = await trip.save()
        response.json(savedTrip.toJSON())
    } catch(exception) {
        next(exception)
    }
})

module.exports = tripsRouter