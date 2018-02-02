import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home,About,Search,Account} from '../index';

export const PageRoute = () => (

  <div className="content-root">
    <Switch>
      <Route exact="exact" path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Search" component={Search} />
      <Route path="/:actionType"  component={Account}/>

    </Switch>
  </div>
)
