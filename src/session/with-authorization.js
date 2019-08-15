// Needs to wrap components that you need to be signed in to see
// if authed, render component and give it the authUser
// else render null (should redirect to log in screen)

import React from 'react';
import { connect} from 'react-redux';
import { getCurrentUser } from '../session/dux';
import LogIn from '../pages/log-in/log-in';

const withAuthorization = (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            if (this.props.authUser) {

            } else {

            }
        }

        render() {
            return this.props.authUser ?
                <Component {...this.props} /> :
                null;
        }
    }

    const mapStateToProps = (state) => ({
        authUser: getCurrentUser(state)
    });

    return connect(
        mapStateToProps
    )(WithAuthorization);
};

export default withAuthorization;