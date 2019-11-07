import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Home from './container/Home';
import errorNotFound from './container/errorNotFound';
import Login from './container/Login';
import Profile from './container/Profile';

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />

      <Route component={errorNotFound} />
    </Switch>
  );
}
