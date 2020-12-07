import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <div>
            <nav>
              <ul className='nav_bar'>
                {/* <li className='img_1'>
                  <Image src={img1} style={{width: 'auto', height: '58px'}}/>
                </li> */}
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/' activeClassName='active_link'>
                    IMG
                  </NavLink>
                </li>
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/pokoje' activeClassName='active_link'>
                    Pokoje
                  </NavLink>
                </li>
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/domki' activeClassName='active_link'>
                    Domki
                  </NavLink>
                </li>
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/gospodarstwo' activeClassName='active_link'>
                    Gospodarstwo
                  </NavLink>
                </li>
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/okolica' activeClassName='active_link'>
                    Okolica
                  </NavLink>
                </li>
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/goscie' activeClassName='active_link'>
                    Goście
                  </NavLink>
                </li>
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/cennik' activeClassName='active_link'>
                    Cennik
                  </NavLink>
                </li>
                <li className='nav_links inactive_link'>
                  <NavLink exact to='/kontakt' activeClassName='active_link'>
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/kontakt">
                <Contact />
              </Route>
              <Route path="/cennik">
                <Price />
              </Route>
              <Route path="/goscie">
                <Guests />
              </Route>
              <Route path="/okolica">
                <Surroundings />
              </Route>
              <Route path="/gospodarstwo">
                <Farm />
              </Route>
              <Route path="/domki">
                <Cabins />
              </Route>
              <Route path="/pokoje">
                <Rooms />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Agro-Wczasy Barbara i Czesław Chaber</h2>;
};

function Rooms() {
  return <h2>Pokoje</h2>;
};

function Cabins() {
  return <h2>Domki</h2>;
};

function Farm() {
  return <h2>Gospodarstwo</h2>;
};

function Surroundings() {
  return <h2>Okolica</h2>;
};

function Guests() {
  return <h2>Goście</h2>;
};

function Price() {
  return <h2>Cennik</h2>;
};

function Contact() {
  return <h2>Kontakt</h2>;
};
export default App;
