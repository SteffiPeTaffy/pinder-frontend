// @flow

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';
import { SENTRY_URL } from './config';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

window.Raven && Raven.config(SENTRY_URL).install();

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
