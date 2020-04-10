import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Logo from '../images/mountain.svg'

const Profile = (props) => {
    return (
        <div className="Profile">
            
            <Navbar bg="dark" variant="dark" fixed='top' expand='lg' className='sticky-nav' >
                <Navbar.Brand onClick={() => props.history.push('/home')} >
                <img
                    alt=""
                    src={Logo}
                    width="40"
                    height="40"
                />
                </Navbar.Brand>
                <div className='divider'/>
                <Button variant="outline-secondary" onClick={() => props.history.push('/home')}>Home</Button>
                <div className='divider'/>
                <Button variant="outline-secondary" onClick={() => props.history.push('/profile')}>Profile</Button>
                <div className='divider'/>
                <Button variant="outline-danger" style={{float: 'right'}} onClick={() => props.history.push('/')}>Logout</Button>
            </Navbar>

           <h1 style={{textAlign: 'center', marginTop: '100px'}}>Your Profile Filler Page</h1>
        </div>
    )
}


export default Profile