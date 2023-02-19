import './App.css';
import Teams from './Components/Teams';
import Header from './Components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Registration from './Components/Registration';
import Rules from './Components/Rules';

function App() {
  return (
    <div className='Main'>
      <Container fluid="md">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Header/>} />
            <Route path='/teams' element={<Teams/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/rules' element={<Rules/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
