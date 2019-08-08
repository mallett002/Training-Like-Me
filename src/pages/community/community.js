import React from 'react';

const Community = (props) => (
    <div>
        <p>Welcome to Train Like Me!</p>
        <button onClick={() => props.firebase.logout()}>sign out</button>
    </div>
);

export default Community;