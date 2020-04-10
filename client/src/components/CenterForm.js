import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Typing from 'react-typing-animation'

const CenterForm = (props) => {
    const [user, setUser] = useState ({
        email: '', 
        password: ''
    })

    const [whichBtn, setWhichBtn] = useState ('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('email: ' + user.email + ' password: ' + user.password)
        if(!user.email || !user.password) return
        if (whichBtn === 'signup') {
            const register = async () => {
                try {
                    const response = axios.post('/api/accounts', user)
                    console.log(response)
                    props.history.push('/home')
                } catch(error) {
                    console.log('error', error)
                }
            }
            register();
        }
        else if (whichBtn === 'login') {
            const login = async () => {
                try {
                    const response = axios.get('/api/accounts/find', user)
                    console.log(response)
                    //props.history.push('/home')
                } catch(error) {
                    console.log('error', error)
                }
            }
            login();
        }
    }

    return (
        <div className="CenterForm">
            <div style={{ position: 'absolute', top: '50px'}} className='Title'>
                <Typing speed={100}>
                    <h2>Alexa, Be My Travel Guide</h2>
                </Typing>
            </div>

            <Form onSubmit={handleSubmit}> 
                <Form.Group controlId="formBasicEmail" style={{width: 150}}>
                    <Form.Control type="email" value={user.email} placeholder="Email" onChange={event => setUser({ ...user, email: event.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{width: 150}}>
                    <Form.Control type="password" value={user.password} placeholder="Password" onChange={event => setUser({ ...user, password: event.target.value})}/>
                </Form.Group>

                <Button variant="outline-secondary" type="submit" style={{width: 150}} onClick={event => setWhichBtn('login')}>
                    Login
                </Button>
                <br/>
                <Button variant="outline-secondary" type="submit" style={{width: 150}} onClick={event => setWhichBtn('signup')}>
                     Sign Up
                </Button>
            </Form>
        </div>
    )
}

export default CenterForm