import React from 'react';
import Logo from '../Assets/bolt_logo.png'
import { Navbar, Container, Nav, Card, Button} from 'react-bootstrap';
import rules from '../Assets/rules.png'

const Rules = () => {

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
            <Card className='rules'>
                <Card.Body><br />
                    <Card.Title className='achi-head'>
                        <img
                            width="40"
                            height="40"
                            src={rules}
                            alt="Achievement"
                        /><strong>{ }
                            &nbsp; Rules & Regulations </strong></Card.Title>
                    <Card.Text><br /><br />
                        <ul className='rules-text'>
                            <li><small>It is compulsory to subscribe "Bolt eSports" Youtube channel to participate in tournaments.</small></li><br />
                            <li><small>No Emulator and Ipad players will be allowed, If any team found doing this will be disqualify.</small></li><br />
                            <li><small>Death Cam must be enable, If you have been killed by hacker or any suspicious player only death cam will be considered.</small></li><br />
                            <li><small>Team-Up is strictly prohibited, If found both teams will be disqualify.</small></li><br />
                            <li><small>The use of emergency pickup is prohibited, if a team uses it, no points will be awarded to that team. </small></li><br />
                            <li><small>Sharing Credentials of the Room to a Non-Registered team or player will lead to disqualification from the tournaments .</small></li><br />
                            <li><small>If there are any issue (Hardware/Internet) from your end, Matches will not be reschedule.</small></li><br />
                            <li><small>Every team is assigned a slot and every member must have to join his/her corresponding slot, if found in the wrong slot player gets kicked out from the room.</small></li><br />
                            <li><small>Perticipants should not have Vulgar team or player in-game-name.</small></li><br />
                            <li><small>Every member of each team must have a minimum of 2 minutes of screen recording in the middle of the game, if the recording is not given on demand, the point will not be given to that particular team. </small></li><br />
                            <li><small>If any suspicious activity or cheating is found in any player, the whole team will be banned, The player must have their screen recording as proof.</small></li><br />
                            <li><small>Only 6 registered players are allowed to play from that team. </small></li><br />
                            <li><small>Every player must have to download the maps which are given in the schedule list. </small></li><br />
                            <li><small>Respect all the decisions made by the management at all time. </small></li><br />
                            <li><small>If any team waste our slot, they will get banned for the whole week. </small></li><br />
                            <li><small>You can cancel your slot 60 min earlier the match. </small></li><br />
                        </ul><br /><br />
                        <br />
                        <Button variant="outline-info" size="lg" href='/registration'>
                            Register Now
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}

export default Rules