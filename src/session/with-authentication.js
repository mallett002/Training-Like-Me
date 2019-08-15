import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
  getCurrentUser,
  removeCurrentUser,
  setCurrentUser 
} from '../session/dux';
import {withFirebase} from '../firebase';

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        componentDidMount() {
            this.handleOnAuthListener();
        }

        componentDidUpdate() {
            this.handleOnAuthListener();
        }

        handleOnAuthListener = () => {
            this.props.firebase.onAuthListener(
                (user) => this.props.setCurrentUser(user),
                () => this.props.removeCurrentUser()
            );
        }

        render() {
            return <Component {...this.props} />;
        }
    }

    const mapStateToProps = (state) => ({
        authUser: getCurrentUser(state)
      });
      
      const mapDispatchToProps = {
        removeCurrentUser,
        setCurrentUser
      };

    return compose(
        withFirebase,
        connect(
            mapStateToProps,
            mapDispatchToProps,
        ),
      )(WithAuthentication);;
}

export default withAuthentication;
