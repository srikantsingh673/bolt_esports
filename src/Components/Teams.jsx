import React from 'react'
import { Nav, Navbar, Container, Card, Carousel, Row, Col, Badge } from 'react-bootstrap'
import Logo from '../Assets/bolt_logo.png'
import winners1 from '../Assets/Teams/Winner-team_s1.jpg'
import winners2 from '../Assets/Teams/Winner-team_s2.jpg'
import winners3 from '../Assets/Teams/Winner-team_s3.jpg'
import winners4 from '../Assets/Teams/Winner-team_s4.jpg'
import team1 from '../Assets/Teams/team04.jpeg'
import team2 from '../Assets/Teams/team02.jpeg'
import team3 from '../Assets/Teams/team03.jpeg'
import team4 from '../Assets/Teams/team01.jpeg'
import team5 from '../Assets/Teams/teamFam.jpeg'
import team6 from '../Assets/Teams/team8rt.jpeg'
import team7 from '../Assets/Teams/teamSG.jpeg'
import team8 from '../Assets/Teams/teamRG.jpeg'
import team9 from '../Assets/Teams/teamCruico.jpeg'
import team10 from '../Assets/Teams/teamBS9.jpeg'
import team11 from '../Assets/Teams/teamOP.jpeg'
import team12 from '../Assets/Teams/team7DS.jpeg'
import team13 from '../Assets/Teams/teamHC.jpeg'
import team14 from '../Assets/Teams/teamTLE.jpeg'
import team15 from '../Assets/Teams/teamTSE.jpeg'
import team16 from '../Assets/Teams/teamBT.jpeg'


const Teams = () => {
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
              <Nav.Link href="#About"><strong>About</strong></Nav.Link>
              <Nav.Link href="/Registration"><strong>Registration</strong></Nav.Link>
              <Nav.Link href="/Teams"><strong>Teams</strong></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card className='tourni'>
        <Card.Header as="h6" ><strong> Tournament Winner Teams </strong></Card.Header>
        <Card.Body>
          <Carousel fade className='crousel-text' variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={winners1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={winners2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={winners3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={winners4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card><br />
      <Card>
        <Card.Img variant="top" src={team1} />
      </Card>
      <br />
      <Card>
        <Card.Img variant="top" src={team2} />
      </Card>
      <br />
      <Card>
        <Card.Img variant="top" src={team3} />
      </Card>
      <br />
      <Card>
        <Card.Img variant="top" src={team4} />
      </Card><br />
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={team5} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team6} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team7} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team8} />
          </Card>
        </Col>
      </Row><br />
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={team9} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team10} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team11} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team12} />
          </Card>
        </Col>
      </Row><br />
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={team13} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team14} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team15} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={team16} />
          </Card>
        </Col>
      </Row><br />
      <Container className='Footer'>
        <div>
          <Badge bg="dark">
          Designed & Created by - Rishu..
          </Badge>
        </div>
      </Container>
    </div>
  )
}

export default Teams