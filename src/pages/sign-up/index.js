import { connect } from 'react-redux';
import SignUp from './sign-up';
import { compose } from 'redux';
import { withFirebase } from '../../firebase';

const mapStateToProps = (state) => ({
    // some state stuff
});

export default compose(
    withFirebase,
    connect(mapStateToProps)
)(SignUp);