import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { goToRoute } from '../../routes/navigation';
import { LOG_IN } from '../../routes/routes';

class Community extends Component {

    onSignOut = async () => {
        const { firebase } = this.props;

        try {
            await firebase.logUserOut()
            goToRoute(LOG_IN);
        } catch(error) {
            console.log({error});
        }   
    }

    render() {
        return (
            <div>
                <p>Welcome to Train Like Me!</p>
                <button onClick={this.onSignOut}>sign out</button>
            </div>
        );
   }               
}
  
Community.propTypes = {
    firebase: PropTypes.object.isRequired
};
    

export default Community;