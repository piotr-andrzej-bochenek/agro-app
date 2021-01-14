import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Links from './links/Links'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import './App.css';

function App() {
  return (
      <Container className="App">
        <h1>Not routed header (IMG)</h1>
        <Router>
          <Navbar />
          <Segment basic className='App__Segment'>
            <Links />
          </Segment>
        </Router>
        <Footer />
      </Container>
  );
}

export default App;
