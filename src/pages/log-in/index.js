import { connect } from 'react-redux';
import { compose } from 'redux';
import LogIn from './log-in';
import { firebaseConnect } from 'react-redux-firebase';

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
});

export default compose(
    firebaseConnect(),
    connect(mapStateToProps) 
)(LogIn);