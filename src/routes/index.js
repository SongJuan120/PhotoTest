import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

//Containers
import {
  Users,
  UserDetail
} from '../pages';

/**
 * All of the routes
 */
const Index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Users} />            
            <Route path="/detail/:id?" component={UserDetail} />                
        </Switch>
  </BrowserRouter>
);

export default Index;