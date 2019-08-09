import React, {Component} from 'react';
import { FirebaseContext } from '../../firebase';
import { goToRoute } from '../../routes/navigation';
import { LOG_IN } from '../../routes/routes';

class Community extends Component {
    static contextType = FirebaseContext;

    onSignOut = () => {
        const firebase = this.context;

        try {
            firebase.logUserOut();
            goToRoute(LOG_IN);
        } catch(error) {
            console.log({error});
        }   
    }

    render() {
        const firebase = this.context;

        return (
            <div>
                <p>Welcome to Train Like Me!</p>
                <button onClick={this.onSignOut}>sign out</button>
            </div>
        );
   }               
}
  

export default Community;