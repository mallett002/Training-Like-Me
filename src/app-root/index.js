import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ROUTES from '../routes/routes';

const AppRoot = (props) => {
  return (
    <Switch>
      {(
        Object.keys(ROUTES).map(route => 
          <Route
            exact
            key={route}
            path={ROUTES[route].path}
            component={ROUTES[route].component}
          />
        ))}
        <Redirect to={ROUTES.signIn.path} />
    </Switch>
  );
};

export default AppRoot;