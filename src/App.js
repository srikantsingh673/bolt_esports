import './App.css';
import Teams from './Components/Teams';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Registration from './Components/Registration';


function App() {
  return (
    <div className='Main'>
      <Container fluid="md">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Header/>} />
          <Route path='teams' element={<Teams />} />
          <Route path='registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
