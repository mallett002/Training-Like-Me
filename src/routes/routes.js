import LogIn from '../pages/log-in';
import SignUp from '../pages/sign-up';
import Community from '../pages/community';

export const LOG_IN = '/log-in';
export const SIGN_UP = '/sign-up';
export const COMMUNITY = '/community';
export const TRAINING = '/training';

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
        component: 'userTrainings'
    }
};
