import { connect } from 'react-redux';
import LogIn from './log-in';
import { compose } from 'redux';
import { withFirebase } from '../../firebase';

const mapStateToProps = (state) => ({
    // state stuff
});

export default compose(
    withFirebase,
    connect(mapStateToProps)
)(LogIn);