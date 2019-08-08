import { compose } from 'redux';
import { connect } from 'react-redux';
import SignUp from './sign-up';
import { firebaseConnect } from 'react-redux-firebase';

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
});

export default compose(
    firebaseConnect(),
    connect(mapStateToProps) 
)(SignUp);