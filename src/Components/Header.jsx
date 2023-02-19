import '../App.css';
import React from 'react'
import Logo from '../Assets/bolt_logo.png'
import { Navbar, Container, Nav, Carousel, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import Scrims_banner from '../Assets/Pro_scrims.jpg'
import Tournament from '../Assets/BOU-S5.png'
import Apex from '../Assets/Apex_Legend.jpg'
import insta from '../Assets/insta.png'
import yt from '../Assets/youtube.png'
import whatsapp from '../Assets/whatsapp.png'
import banner from '../Assets/bolt_banner01.jpg'
import discord from '../Assets/discord.png'
import instablack from '../Assets/insta-black.png'
import whatsappblack from '../Assets/whatsapp-black.png'
import crossinsta from '../Assets/insta-black-cross.png'
import crosswhatsapp from '../Assets/whatsapp-black-cross.png'

const Header = () => {
  return (
    <div className='Home'>
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
              <Nav.Link href="#About"><strong>About</strong></Nav.Link>
              <Nav.Link href="/registration"><strong>Registration</strong></Nav.Link>
              <Nav.Link href="/teams"><strong>Teams</strong></Nav.Link>
              <Nav.Link href="/rules"><strong>Rules & Regulations</strong></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <br />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Scrims_banner}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Tournament}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Apex}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <br />
        <div className="d-grid gap-2">
          <Button variant="outline-warning" size="lg" href='/registration'>
            Register Now
          </Button>
        </div>
        <br />
        <div id='About'>
          <Card className='about'>
            <Card.Body><br />
              <p className='para'>
                Bolt esports eSports is a Professional eSports Organization that Organize Tier-2 and Tier-3 Tournaments and Daily Scrims
                Where you can participate free and win exciting prize pool
                For More Details Follow Us on our Social media.
              </p><br /><br />
              <h5><u>Contact Us</u></h5><br />
              <div class="Container">
                <div class="row">
                  <div class="col">
                    <a href='https://www.instagram.com/esports_bolt/'>
                      <img
                        alt="insta"
                        src={insta}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <a href='https://www.youtube.com/@boltesports'>
                      <img
                        alt="youtube"
                        src={yt}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <a href='https://chat.whatsapp.com/KyfSV82dqMOBFBHraMZd4F'>
                      <img
                        alt="Whatsapp"
                        src={whatsapp}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <a href='https://discord.com/invite/CUG4AVCu'>
                      <img
                        alt="discord"
                        src={discord}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <br /><br /><br />
              <div>
                <h5><u>Managements</u></h5>
                <Row>
                  <Col>
                    <br />
                    <p class="font-monospace">Rohit Rajput <br /> <small>Manager</small></p>
                    <p class="font-monospace">Akash Singh <br /> <small>Financer</small></p>
                    <p class="font-monospace">Shadow <br /> <small>Financer</small></p>
                    <p class="font-monospace">Rishu <br /> <small>Caster</small></p>
                  </Col>
                  <Col >
                    <br />
                    <a href='https://wa.me/7004323017'>
                      <img
                        className='icon'
                        alt="whatsappblack"
                        src={whatsappblack}
                        width="30"
                        height="30"

                      />
                    </a>
                    <a href='https://www.instagram.com/rajputrohit31_/'>
                      <img
                        alt="instablack"
                        src={instablack}
                        width="30"
                        height="30"
                        className='icon'
                      />
                    </a>
                    <br /><br />
                    <img
                      className='icon'
                      alt="whatsappblack"
                      src={crosswhatsapp}
                      width="30"
                      height="30"
                    />
                    <img
                      alt="instablack"
                      src={crossinsta}
                      width="30"
                      height="30"
                      className='icon'
                    />
                    <br /><br />
                    <img
                      className='icon'
                      alt="whatsappblack"
                      src={crosswhatsapp}
                      width="30"
                      height="30"

                    />
                    <img
                      alt="instablack"
                      src={crossinsta}
                      width="30"
                      height="30"
                      className='icon'
                    />
                    <br /><br />
                    <a href='https://wa.me/9113760169'>
                      <img
                        className='icon'
                        alt="whatsappblack"
                        src={whatsappblack}
                        width="30"
                        height="30"

                      />
                    </a>
                    <a href='https://www.instagram.com/the_rishu0p/'>
                      <img
                        alt="instablack"
                        src={instablack}
                        width="30"
                        height="30"
                        className='icon'
                      />
                    </a>
                    <br /><br />
                  </Col>
                </Row>
              </div>
              <br /><br />
            </Card.Body>
            <Container className='Footer'>
              <div>
                <Badge bg="dark">
                Designed & Created by - Rishu..
                </Badge>
              </div>
            </Container>
            <br />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Header