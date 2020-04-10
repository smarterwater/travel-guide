import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CenterForm = (props) => {
    const [user, setUser] = useState ({
        email: '', 
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('email: ' + user.email + ' pass: ' + user.password)
        if(!user.email || !user.password) return
        const register = async () => {
            try {
                const response = axios.post('/api/users', user)
                console.log(response)
                props.history.push('/home')
            } catch(error) {
                console.log('error', error)
            }
        }
        register();
    }

    return (
        <div className="CenterForm">
            <Form onSubmit={handleSubmit}> 
                <Form.Group controlId="formBasicEmail" style={{width: 150}}>
                    <Form.Control type="email" value={user.email} placeholder="Email" onChange={event => setUser({ ...user, email: event.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{width: 150}}>
                    <Form.Control type="password" value={user.password} placeholder="Password" onChange={event => setUser({ ...user, password: event.target.value})}/>
                </Form.Group>

                <Button variant="outline-secondary" type="submit" style={{width: 150}}>
                    Login
                </Button>
                <br/>
                <Button variant="outline-secondary" type="submit" style={{width: 150}}>
                     Sign Up
                </Button>
            </Form>
        </div>
    )
}

export default CenterForm