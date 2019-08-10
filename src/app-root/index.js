import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFirebase } from '../firebase';
import { setCurrentUser, signCurrentUserOut } from '../session/dux';
import {Redirect, Route, Switch} from 'react-router-dom';
import ROUTES, { LOG_IN, SIGN_UP, COMMUNITY } from '../routes/routes';

class AppRoot extends Component {
  constructor(props) {
    super(props);

    this.props.setCurrentUser(
      JSON.parse(localStorage.getItem('authUser'))
    );
  }

  componentDidMount() {
    this.listener = this.props.firebase.onAuthUserListener(
      authUser => {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        this.props.setCurrentUser(authUser);
      },
      () => {
        localStorage.removeItem('authUser');
        this.props.signCurrentUserOut();
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    const { authUser } = this.props;

    if (!authUser) {
      return (
        <Switch>
          <Route path={LOG_IN} component={ROUTES[LOG_IN].component} />
          <Route path={SIGN_UP} component={ROUTES[SIGN_UP].component}/>
          <Redirect to={LOG_IN} />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path={COMMUNITY} component={ROUTES[COMMUNITY].component} />
        <Route path={LOG_IN} component={ROUTES[LOG_IN].component} />
        <Route path={SIGN_UP} component={ROUTES[SIGN_UP].component}/>
        <Redirect to={LOG_IN} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const mapDispatchToProps = {
  setCurrentUser,
  signCurrentUserOut,
};

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(AppRoot);
