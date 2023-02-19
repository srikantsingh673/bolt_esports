import React from 'react'
import { Card, Button, Nav, Navbar, Container, Badge } from 'react-bootstrap'
import banner from '../Assets/bolt_banner01.jpg'
import Logo from '../Assets/bolt_logo.png'
import Tournament from '../Assets/BOU-S5.png'

const Registration = () => {

    
    // When the button is clicked
    const btnHandler = () => {
        alert('* It is compulsory to subscribe "Bolt eSports" Youtube channel to participate in tournaments.\n*  Death Cam must be enable, If you have been killed by hacker or any suspicious player only death cam will be considered.\n*  Team-Up is strictly prohibited, If found both teams will be disqualify.\n* Every team is assigned a slot and every member must have to join his/her corresponding slot, if found in the wrong slot player gets kicked out from the room.\n* Every member of each team must have a minimum of 2 minutes of screen recording in the middle of the game, if the recording is not given on demand, the point will not be given to that particular team. \n* If any suspicious activity or cheating is found in any player, the whole team will be banned, The player must have their screen recording as proof.\n* Only 6 registered players are allowed to play from that team.\n* Respect all the decisions made by the management at all time.\n I am agreeing all the terms & conditions in the Rules and Regulation section.\n* I am agreeing all the terms & conditions above');
    };

    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img
                        alt="logo"
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><strong>Home</strong></Nav.Link>
                            <Nav.Link href="/"><strong>About</strong></Nav.Link>
                            <Nav.Link href="/registration"><strong>Registration</strong></Nav.Link>
                            <Nav.Link href="/teams"><strong>Teams</strong></Nav.Link>
                            <Nav.Link href="/rules"><strong>Rules & Regulations</strong></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar><br />
            <div>
                <Card className='Reg'>
                    <Card.Img variant="top" src={banner} />
                    <Card.Body>
                        <Card.Text>
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <strong>Participation Fee : 20₹  per Squad</strong><br />
                                        Two Matches from Wednesday - Monday <br /> 9:00 PM and 09:45 PM accordingly.<br />
                                        Matches will be live on <a href='https://www.youtube.com/@boltesports'>Bolt Esports official YouTube channel.</a>
                                    </div>
                                    <div class="col-sm">
                                        <u><strong>Prize Pool</strong></u><br />
                                        1st - 130₹ <br />
                                        2nd - 60₹ <br />
                                        3rd - 40₹ <br />
                                        Top fragger of the week - 40₹ <br />
                                    </div>
                                </div>
                            </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="outline-danger" size="lg" href='https://esportsweb.in/register/Ust0Ii7dkKo1F70GGyjc' onClick={btnHandler}>
                                Register Now
                            </Button>
                        </div><br />
                        <div className="d-grid gap-2">
                            <Button variant="outline-success" size="lg" href="upi://pay?pa=akelarohit1@oksbi&amp;pn=FNAME SNAME K&amp;cu=INR" class="upi-pay1">
                                Pay Now 20₹
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <Card className='Reg'>
                    <Card.Img variant="top" src={Tournament} />
                    <Card.Body>
                        <Card.Text>
                            We are proudly announce that, We are going to organize<strong> Battle of Underdogs Season-5</strong> soon<br />
                            Total Prize pool will be<strong> 10,000₹</strong>, and Participation will be absolutly <strong>free.</strong>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="outline-danger" size="lg">
                                Coming Soon
                            </Button>
                        </div>
                    </Card.Body>
                </Card><br /><br />
                <Container className='Footer'>
                    <div>
                        <Badge bg="dark">
                            Designed & Created by - Rishu..
                        </Badge>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Registration