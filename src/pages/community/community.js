import React, {Component} from 'react';
import { FirebaseContext } from '../../firebase';
import { goToRoute } from '../../routes/navigation';
import { LOG_IN } from '../../routes/routes';

class Community extends Component {
    static contextType = FirebaseContext;

    onSignOut = async () => {
        const firebase = this.context;

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
    // add propTypes
};
    

export default Community;