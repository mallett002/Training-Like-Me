import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ROUTES, { LOG_IN } from '../routes/routes';

const AppRoot = () => {
  return (
    <Switch>
      {(
        Object.keys(ROUTES).map(route => 
          <Route
            exact={true}
            key={route}
            path={ROUTES[route].path}
            component={ROUTES[route].component}
          />
      ))}
      <Redirect to={ROUTES[LOG_IN].path} />
    </Switch>
  );
};

export default AppRoot;