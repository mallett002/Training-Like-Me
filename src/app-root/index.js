import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFirebase } from '../firebase';
import { setCurrentUser, signCurrentUserOut } from '../session/dux';
import {Redirect, Route, Switch} from 'react-router-dom';
import ROUTES, { LOG_IN } from '../routes/routes';

class AppRoot extends Component {
  componentDidMount() {
    this.props.firebase.onAuthUserListener(
      authUser => {
        this.props.setCurrentUser(authUser);
      },
      () => {
        this.props.signCurrentUserOut();
      },
    );
  }

  render() {
    return (
      <Switch>
      {(
        Object.keys(ROUTES).map(route => 
          <Route
            exact={true}
            key={route}
            path={route}
            component={ROUTES[route].component}
          />
      ))}
      <Redirect to={ROUTES[LOG_IN].path} />
    </Switch>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser,
  signCurrentUserOut,
};

export default compose(
  withFirebase,
  connect(null, mapDispatchToProps)
)(AppRoot);
