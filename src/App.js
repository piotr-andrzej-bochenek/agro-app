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
        <div className='App__header--h1'>
          <Image src={img1} centered rounded/>
          <h1 className='App__header--h2'>
            <Image src={img2} size='tiny' centered/>
            Agro-Wczasy Barbara i Czesław Chaber
            <Image src={img2} size='tiny' centered/>
          </h1>
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
