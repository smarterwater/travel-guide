import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../images/mountain.svg'
import Guy from '../images/backpacker.jpg'
import Backpack from '../images/backpack.jpg'
import Planned from '../images/backlog.jpg'
import Peaks from '../images/peaks.jpg'
import Waterfall from '../images/waterfall.jpg'
import Lake from '../images/lake.jpg'



const Home = (props) => {
    return (
        <div className="Home">
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

            <CardDeck className="Deck">
                <Card>
                    <Card.Img variant="top" src={Guy} />
                    <Card.Body>
                        <Card.Text>
                            <b>Plan Your Next Adventure</b>
                            <br/>
                            Planning a trip can be confusing. From hotels to flights to weather, there are an endless amount of things to worry about. We help you simplify the process. 
                        </Card.Text>
                        <Button variant="outline-secondary">Go To</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Backpack} />
                    <Card.Body>
                        <Card.Text>
                            <b>What's In Your Backpack</b>
                            <br/>
                            There's a lot to prepare before going on your trip. Manage the list of items to bring with you here with the help of our recommendations.
                        </Card.Text>
                        <Button variant="outline-secondary">Go To</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Planned} />
                    <Card.Body>
                        <Card.Text>
                            <b>View Planned Trips</b>
                            <br/>
                            So many beautiful spots on your bucket list, so little time. Here you can view all the trips that you have planned out for the future and edit them if necessary.
                        </Card.Text>
                        <Button variant="outline-secondary">Go To</Button>
                    </Card.Body>
                </Card>
            </CardDeck>

            <CardDeck className="Deck">
                <Card>
                    <Card.Img variant="top" src={Peaks} />
                    <Card.Body>
                        <Card.Text>
                            <b>View Travel History</b>
                            <br/>
                            We've gone through a lot together. Here you can view all the memories that we've made, as in, the list of all the trips that you've planned with our help.
                        </Card.Text>
                        <Button variant="outline-secondary">Go To</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Waterfall} />
                    <Card.Body>
                        <Card.Text>
                            <b>Popular Trips</b>
                            <br/>
                            The world is full of beautiful natural locations. Why bother picking one yourself when we can just show you where everyone else is going!
                        </Card.Text>
                        <Button variant="outline-secondary">Go To</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Lake} />
                    <Card.Body>
                        <Card.Text>
                            <b>Manage Your Profile</b>
                            <br/>
                            Here goes the boring details. If you for some reason need to manage your account or god forbid, delete your account, you can take care of that in this section.
                        </Card.Text>
                        <Button variant="outline-secondary">Go To</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Home