const accountsRouter = require('express').Router()
const Account = require('../models/account')

accountsRouter.post('/find', async (request, response) => {
    const email = request.body.email
    const pass = request.body.password
    
    const result = await Account.findOne({email})
    if (!result) {
        return response.status(404).json({ error: "Email/password does not match" });
    } 
    else {
        if (result.password != pass) {
            return response.status(404).json({ error: "Email/password does not match" });
        } else {
            response.json(result.username);
        }
    }
})

accountsRouter.post('/', async (request, response) => {
    const body = request.body
    const result = await Account.findOne({email: body.email})
    if (result) {
        return response.status(404).json({ error: "Email already exists." });
    } else {
        const account = new Account ({
            username: body.username,
            email: body.email,
            password: body.password,
        })
    
        const savedAccount = await account.save()
        response.json(savedAccount.username)
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