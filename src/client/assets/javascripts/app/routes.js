import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import ProjectsView from 'features/projects/components/ProjectsView';
import NotFoundView from 'components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectsView} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
