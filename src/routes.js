import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from 'views/pages/ErrorPage';
import BoardList from 'views/pages/Board/BoardList';
import BoardDetail from 'views/pages/Board/BoardDetail';
import BoardEditor from 'views/pages/Board/BoardEditor';
import Schedule from 'views/pages/Schedule';

export default function createRoutes() {
  return (
    <Switch>
      <Route exact path="/boards" component={BoardList} />
      <Route exact path="/boards/new" component={BoardEditor} />
      <Route exact path="/boards/:boardId" component={BoardDetail} />
      <Route exact path="/calendar" component={Schedule} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}
