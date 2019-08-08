import { compose } from 'redux';
import { connect } from 'react-redux';
import Community from './community';
import { firebaseConnect } from 'react-redux-firebase';
import { UserIsAuthenticated } from '../../auth/auth-user';

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
});

export default compose(
    firebaseConnect(),
    connect(mapStateToProps) 
)(UserIsAuthenticated(Community));