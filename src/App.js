import './App.css';
import Teams from './Components/Teams';
import Header from './Components/Header';
import { HashRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Registration from './Components/Registration';


function App() {
  return (
    <div className='Main'>
      <Container fluid="md">
      <HashRouter>
          <Route exact path="/web" component={Header} />
          <Route path='/teams' component={Teams} />
          <Route path='/registration' component={Registration} />
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
