import LogIn from '../account-info/log-in';
import SignUp from '../account-info/sign-up';
import Community from '../pages/community/community';

export const LOG_IN = '/log-in';
const SIGN_UP = '/sign-up';
const COMMUNITY = '/users/:user/community';
const TRAINING = '/users/:user/training';


export default {
    [LOG_IN]: {
        path: LOG_IN,
        component: LogIn
    },
    [SIGN_UP]: {
        path: SIGN_UP,
        component: SignUp
    },
    [COMMUNITY]: {
        path: COMMUNITY,
        component: Community
    },

    // TODO: do this one
    [TRAINING]: {
        path: TRAINING,
        component: 'userTranings'
    }
};
