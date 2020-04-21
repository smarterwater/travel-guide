import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Typing from 'react-typing-animation'

const Login = (props) => {
    const [user, setUser] = useState ({
        username: "",
        email: "", 
        password: "",
        error: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('email: ' + user.email + ' password: ' + user.password)
        if(!user.email || !user.password) return

        const data = {
            username: user.username,
            email: user.email,
            password: user.password
        }

        const login = async () => {
            try {
                const response = await axios.post('/api/accounts/find', data, {
                    'Content-Type': 'application/json',
                })
                localStorage.setItem('name', response.data)
                props.history.push('/home')
            } catch(error) {
                console.log(error)
                setUser( {...user, error: 'Email or password is incorrect.'})
            }
        }
        login();
    }

    return (
        <div className="Form">
            <Form onSubmit={handleSubmit}> 
                <Form.Group controlId="formBasicEmail" style={{width: 150}}>
                    <p style={{color: '#F4585F'}}>{user.error}</p>
                    <Form.Control type="email" value={user.email} placeholder="Email" onChange={event => setUser({ ...user, email: event.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{width: 150}}>
                    <Form.Control type="password" value={user.password} placeholder="Password" onChange={event => setUser({ ...user, password: event.target.value})}/>
                </Form.Group>

                <Button variant="outline-secondary" type="submit" style={{width: 150}}>
                    Login
                </Button>
                <br/>
                <Button variant="link" type="submit" style={{width: 150, color: '#6c757d'}} onClick={event => props.history.push('/signup')}>
                     Or Sign Up
                </Button>
            </Form>
        </div>
    )
}

export default Login