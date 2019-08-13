import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ROUTES, { LOG_IN, SIGN_UP, COMMUNITY } from '../routes/routes';

const AppRoot = () => (
  <Switch>
    <Route path={COMMUNITY} component={ROUTES[COMMUNITY].component} />
    <Route path={LOG_IN} component={ROUTES[LOG_IN].component} />
    <Route path={SIGN_UP} component={ROUTES[SIGN_UP].component}/>
    <Redirect to={LOG_IN} />
  </Switch>
);

export default AppRoot;
