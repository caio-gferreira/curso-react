import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.css';

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>

            <Route path="/home"> 
                <Home />
            </Route>
        </Switch>
    </main>
)

export default Content;