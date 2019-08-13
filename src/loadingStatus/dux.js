import LOADING_STATUSES from './statuses';

// Actions
const LOADING_STATUS_DONE = 'LOADING_STATUS_DONE';
const LOADING_STATUS_LOADING = 'LOADING_STATUS_LOADING';

// Action Creators
const setLoadingStatusToDone = () => ({
    type: LOADING_STATUS_DONE
});

const setLoadingStatusToLoading = () => ({
    type: LOADING_STATUS_LOADING
});

// Initial State
const DEFAULT_STATE = {
    loadingStatus: LOADING_STATUSES.NONE
};

// Reducer
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case LOADING_STATUS_DONE:
            return {
                loadingStatus: LOADING_STATUSES.DONE
            };
        case LOADING_STATUS_LOADING:
            return {
                loadingStatus: LOADING_STATUS_LOADING
            };
        default:
            return DEFAULT_STATE;
    }
}

// Selectors
export const getLoadingStatus = (state) => state.loadingState.loadingStatus;