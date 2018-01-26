import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home,About} from '../index';
export const PageRoute = () => (

  <div className="content-root">
    <Switch>
      <Route exact="exact" path="/" component={Home}/>
      <Route path="/About" component={About}/>
    </Switch>
  </div>
)
