const accountsRouter = require('express').Router()
const Account = require('../models/account')

accountsRouter.get('/', async (request, response) => {
    const accounts = await Account.find({})
    response.json(accounts.map(account => account.toJSON()))
})

accountsRouter.get('/find', (request, response) => {
    const body = request.body
    Account.findOne({ email: body.email, password: body.password }, (err, result) => {
      if (result == null) {
        response.send("no");
      } else {
        response.send("yes"); 
      }
    });
})

accountsRouter.post('/', async (request, response, next) => {
    const body = request.body

    const account = new Account ({
        email: body.email,
        password: body.password,
    })

    try {
        const savedAccount = await account.save()
        response.json(savedAccount.toJSON())
    } catch(exception) {
        next(exception)
    }
})

accountsRouter.delete('/:id', async (request, response, next) => {
    try {
        await Account.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (exception) {
        next(exception)
    }
    Account.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

module.exports = accountsRouter