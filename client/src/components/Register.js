import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = (props) => {
    const [user, setUser] = useState ({
        username: "",
        email: "", 
        password: "",
        error: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!user.email || !user.password) return
        const data = {
            username: user.username,
            email: user.email,
            password: user.password
        }
        const register = async () => {
            try {
                const response = await axios.post('/api/accounts/', data)
                localStorage.setItem('name', response.data)
                props.history.push('/home')
            } catch(error) {
                setUser( {...user, error: 'Email already taken.'})
            }
        }
        register();
    }

    return (
        <div className="Form">
            <Form onSubmit={handleSubmit}> 
                <Form.Group controlId="formBasicText" style={{width: 150}}>
                    <p style={{color: '#F4585F'}}>{user.error}</p>
                    <Form.Control type="username" value={user.username} placeholder="Username" onChange={event => setUser({ ...user, username: event.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" style={{width: 150}}>
                    <Form.Control type="email" value={user.email} placeholder="Email" onChange={event => setUser({ ...user, email: event.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" style={{width: 150}}>
                    <Form.Control type="password" value={user.password} placeholder="Password" onChange={event => setUser({ ...user, password: event.target.value})}/>
                </Form.Group>

                <Button variant="outline-secondary" type="submit" style={{width: 150}}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Register