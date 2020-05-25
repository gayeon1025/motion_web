import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from 'views/pages/ErrorPage';
import BoardPage from 'views/pages/BoardPage';
import BoardDetail from 'views/pages/BoardDetail';

export default function createRoutes() {
  return (
    <Switch>
      <Route exact path="/boards" component={BoardPage} />
      <Route exact path="/boards/:boardId" component={BoardDetail} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}
