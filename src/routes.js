import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from 'views/pages/ErrorPage';
import BoardPage from 'views/pages/BoardPage';

export default function createRoutes() {
  return (
    <Switch>
      <Route exact path="/boards" component={BoardPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}
