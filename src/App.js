import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Links from './links/Links'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import img1 from './assets/images/header01.png';
import img2 from './assets/images/logo192.png';
import './App.css';

function App() {
  return (
      <Container className="App">
        <div className='App__header--container'>
          <Image src={img1} centered rounded/>
          <h2 className='App__header--title'>
            <Image src={img2} avatar/>
            Agro-Wczasy Barbara i Czesław Chaber
          </h2>
          <i className='App__header--subtitle'>Gospodarstwo agroturystyczne na Pomorzu Środkowym +48 999 999 999</i>
        </div>
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
