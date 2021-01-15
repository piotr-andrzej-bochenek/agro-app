import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Links from './links/Links'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import img1 from './assets/images/header01.png';
import './App.css';

function App() {
  return (
      <Container className="App">
        <h1>
          <Image src={img1} centered rounded/>
        </h1>
        <Router>
          <Navbar />
          <Segment className='App__Segment'>
            <Links />
          </Segment>
        </Router>
        <Footer className='App__Footer'/>
      </Container>
  );
}

export default App;
