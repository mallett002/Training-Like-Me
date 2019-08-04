import LogIn from '../account-info/log-in';
import SignUp from '../account-info/sign-up';
import Community from '../pages/community/community';

export const LOG_IN = '/log-in';
export const SIGN_UP = '/sign-up';
export const COMMUNITY = '/users/:user/community';
export const TRAINING = '/users/:user/training';


export default {
    [COMMUNITY]: {
        path: COMMUNITY,
        component: Community
    },
    [LOG_IN]: {
        path: LOG_IN,
        component: LogIn
    },
    [SIGN_UP]: {
        path: SIGN_UP,
        component: SignUp
    },

    // TODO: do this one
    [TRAINING]: {
        path: TRAINING,
        component: 'userTranings'
    }
};
