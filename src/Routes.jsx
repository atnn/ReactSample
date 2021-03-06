import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
