const accountsRouter = require('express').Router()
const Account = require('../models/account')

accountsRouter.get('/', (request, response) => {
    Account.find({}).then(accounts => {
        response.json(accounts.map(account => account.toJSON()))
    })
})

accountsRouter.post('/', (request, response, next) => {
    const body = request.body

    const account = new Account ({
        email: body.email,
        password: body.password,
    })

    account.save()
        .then(savedAccount => {
            response.json(savedAccount.toJSON())
        })
        .catch(error => next(error))
})

accountsRouter.delete('/:id', (request, response, next) => {
    Account.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

module.exports = accountsRouter