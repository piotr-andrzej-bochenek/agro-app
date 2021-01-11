import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Rooms from '../rooms/Rooms';
import Cabins from '../cabins/Cabins';
import Farm from '../farm/Farm';
import Surroundings from '../surroundings/Surroundings';
import Guests from '../guests/Guests';
import Prices from '../prices/Prices';
import Contact from '../contact/Contact';

export default () => (
    <Switch>
        <Route path="/kontakt">
            <Contact />
        </Route>
        <Route path="/cennik">
            <Prices />
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
