import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

//Containers
import {
  Photo,
  PhotoDetail
} from '../pages';

/**
 * All of the routes
 */
const Index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Photo} />            
            <Route path="/detail" component={PhotoDetail} />                
        </Switch>
  </BrowserRouter>
);

export default Index;