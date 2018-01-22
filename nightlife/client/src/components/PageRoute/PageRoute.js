import React from 'react';
import {Route, Switch} from 'react-router-dom';



const PageRoute = (props) => {
  <div className="content-root">
    <Switch>
      <Route exact path="/" component={About}/>
    </Switch>
  </div>
}
