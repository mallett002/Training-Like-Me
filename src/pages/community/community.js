import React from 'react';
import { UserIsAuthenticated } from '../../auth/auth-user';

const Community = () => (
    <div>Welcome to Train Like Me!</div>
);

export default UserIsAuthenticated(Community);