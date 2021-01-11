import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

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

export default () => (
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
);
