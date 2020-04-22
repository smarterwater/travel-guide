import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Logo from '../images/mountain.svg'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Anon from '../images/anon.png'
import Modal from 'react-bootstrap/Modal'



const Profile = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

            <Jumbotron className="">
                <h1 className="h1Space Jumbotext">Account Profile</h1>
                <img
                    alt=""
                    src={Anon}
                    width="150"
                    height="150"
                    className="ProfilePicture"
                />
                <h4 className="Jumbotext">Hello, {localStorage.getItem('name')}</h4>
            </Jumbotron>
            <hr/>

            <div className="ProfileForm">
                <Form.Group controlId="formBasicText" style={{width: 150}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder={localStorage.getItem('name')}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" style={{width: 150}}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" style={{width: 150}}>
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Current Password"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" style={{width: 150}}>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password"/>
                </Form.Group>

                <Button variant="outline-secondary" type="submit" style={{width: 150}}>
                    Update Profile
                </Button>
                <Button variant="outline-danger" type="submit" style={{width: 150}} onClick={handleShow}>
                    Delete Profile
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>WARNING!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete your profile?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Yes
                </Button>
                </Modal.Footer>
            </Modal>
                
        </div>
    )
}


export default Profile