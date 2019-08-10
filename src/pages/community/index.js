import { connect } from 'react-redux';
import Community from './community';
import { compose } from 'redux';
import { withFirebase } from '../../firebase';

const mapStateToProps = (state) => ({
    // some stuff...
});

export default compose(
    withFirebase,
    connect(mapStateToProps)
)(Community);