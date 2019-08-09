import React, {Component} from 'react';
import { FirebaseContext } from '../../firebase';

class Community extends Component {
    static contextType = FirebaseContext;

    render() {
        const firebase = this.context;

        return (
            <div>
                <p>Welcome to Train Like Me!</p>
                <button onClick={firebase.logUserOut}>sign out</button>
            </div>
        );
   }               
}
  

export default Community;