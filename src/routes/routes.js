import SignIn from '../account-info/sign-in';
import SignUp from '../account-info/sign-up';

const SIGN_IN = 'signIn';
const SIGN_UP = 'signUp';
const COMMUNITY = 'community';
const TRAINING = 'training';


export default {
    [SIGN_IN]: {
        path: '/sign-in',
        component: SignIn
    },
    [SIGN_UP]: {
        path: '/sign-up',
        component: SignUp
    },
    
    // TODO: will change these routes when get there...
    [COMMUNITY]: {
        path: '/:user/community',
        component: 'communityComponent'
    },
    [TRAINING]: {
        path: '/:user/community',
        component: 'userTranings'
    }
};
