// Actions
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

// Action Creators
export const setCurrentUser = (authUser) => ({
    authUser,
    type: SET_CURRENT_USER
});

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

// Initial State
const DEFAULT_STATE = {
    authUser: null
};

// Reducers
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case REMOVE_CURRENT_USER:
            return DEFAULT_STATE;
        case SET_CURRENT_USER:
            return {
                authUser: action.authUser
            };
        default:
            return DEFAULT_STATE;
    }
}

// Selectors
export const getCurrentUser = (state) => state.sessionState.authUser;
