import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home,About,Search} from '../index';
export const PageRoute = () => (

  <div className="content-root">
    <Switch>
      <Route exact="exact" path="/" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Search" component={Search}/>
    </Switch>
  </div>
)
