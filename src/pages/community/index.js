import { connect } from 'react-redux';
import Community from './community';
import { compose } from 'redux';
import { withFirebase } from '../../firebase';
import withAuthorization from '../../session/with-authorization';

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
});

export default compose(
    withFirebase,
    withAuthorization,
    connect(mapStateToProps),
)(Community);