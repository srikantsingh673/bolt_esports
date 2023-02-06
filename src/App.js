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
        <Route exact path="/web" element={<Header/>} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/registration' element={<Registration />} />
      </HashRouter>
      </Container>
    </div>
  );
}

export default App;
