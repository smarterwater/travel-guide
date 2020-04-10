const tripsRouter = require('express').Router()
const Trip = require('../models/trip')

tripsRouter.get('/', async (request, response) => {
    const trips = await Trip.find({})
    response.json(trips.map(trip => trip.toJSON()))
})

// accountsRouter.get('/find', (request, response) => {
//     const body = request.body
//     Account.findOne({ email: body.email, password: body.password }, (err, result) => {
//       if (result == null) {
//         response.send("no");
//       } else {
//         response.send("yes"); 
//       }
//     });
// })

tripsRouter.post('/', async (request, response, next) => {
    const body = request.body

    const trip = new Trip ({
        // email: body.email,
        // password: body.password,
    })

    try {
        const savedTrip = await trip.save()
        response.json(savedTrip.toJSON())
    } catch(exception) {
        next(exception)
    }
})

// accountsRouter.delete('/:id', async (request, response, next) => {
//     try {
//         await Account.findByIdAndRemove(request.params.id)
//         response.status(204).end()
//     } catch (exception) {
//         next(exception)
//     }
//     Account.findByIdAndRemove(request.params.id)
//         .then(() => {
//             response.status(204).end()
//         })
//         .catch(error => next(error))
// })

module.exports = tripsRouter