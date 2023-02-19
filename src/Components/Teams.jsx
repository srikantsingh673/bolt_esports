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
import achi from '../Assets/achi.png'
import single_kill from '../Assets/single-shot.png'
import team_kill from '../Assets/team-shot.png'
import achi01 from '../Assets/achi01.png'

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
              <Nav.Link href="/"><strong>About</strong></Nav.Link>
              <Nav.Link href="/registration"><strong>Registration</strong></Nav.Link>
              <Nav.Link href="/teams"><strong>Teams</strong></Nav.Link>
              <Nav.Link href="/rules"><strong>Rules & Regulations</strong></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card className='tourni'>
        <Card.Header className='achi-head' ><strong> Tournament Winner Teams </strong></Card.Header>
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
      <Card className='achi'>
        <Card.Body><br />
          <Card.Title className='achi-head'>
            <img
              width="40"
              height="40"
              src={achi}
              alt="Achievement"
            />{ }<strong>
              Team's Achievement </strong></Card.Title>
          <Card.Text><br /><br/>
            <Container>
              <p className='achi-body'><img
                width="40"
                height="40"
                src={team_kill}
                alt="Achievement"
              />
                Highest Team Kills { }
              </p><br />
              <Container>
                <Row>
                  <Col>
                    <p>26 Kills</p><br/>
                    <p>25 Kills</p><br/>
                    <p>23 Kills</p><br/>
                  </Col>
                  <Col>
                    <p>Bolt eSports</p><br/>
                    <p>Try Hard</p><br/>
                    <p>MIB, CGE, Thermite, ICEFIY</p>
                  </Col>
                </Row>
              </Container><br/>
              <p className='achi-body'>
              <img
                  width="40"
                  height="40"
                  src={single_kill}
                  alt="Achievement"
                />{  }
                Highest Individual Kills 
                </p><br />
                <Container>
                <Row>
                  <Col>
                    <p>14 Kills</p><br/>
                    <p>14 Kills</p><br/>
                    <p>13 Kills</p><br/>
                  </Col>
                  <Col>
                    <p><small>The_Revilo<br/>(Thermite eSports)</small></p>
                    <p><small>TLE_Kunnu<br/>(The Lion eSports)</small></p>
                    <p><small>The_Saurabh<br/>(Thermite eSports)</small></p>
                  </Col>
                </Row>
              </Container>
            </Container><br /><br /><br />
            <Container className='achi-head'>
              <p> <img
                width="40"
                height="40"
                src={achi01}
                alt="Achievement"
              />{ }&nbsp;&nbsp;<strong>Highest Collected Points in 12 Matches </strong></p><br /><br />
              <p>Team Youtube  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;197 pts</p>
              <p>Thermite eSports &nbsp;&nbsp;&nbsp;196 Pts</p>
              <p>Bolt eSports &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;190 Pts</p>
            </Container><br /><br /><br />
          </Card.Text>
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