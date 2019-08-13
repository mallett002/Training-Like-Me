import { connect } from 'react-redux';
import Community from './community';
import { compose } from 'redux';
import { withFirebase } from '../../firebase';

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
});

export default compose(
    withFirebase,
    connect(mapStateToProps),
)(Community);