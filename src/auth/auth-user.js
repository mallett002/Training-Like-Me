import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { browserHistory } from '../root-reducer';
import LoadingScreen from '../pages/loading/loading';
import {LOG_IN} from '../routes/routes';

const locationHelper = locationHelperBuilder({});

export const UserIsAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsAuthenticated',
    AuthenticatingComponent: LoadingScreen,
    allowRedirectBack: true,
    redirectPath: () => LOG_IN,
    authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
        auth.isLoaded && !auth.isEmpty,
    redirectAction: (newLoc) => (dispatch) => {
        browserHistory.replace(newLoc);
        // TODO: Make a redux action for unauthed redirect
        // dispatch({ type: 'UNAUTHED_REDIRECT' });
        }
});

// If user already logged in but goes to log in page:
export const UserIsNotAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    AuthenticatingComponent: LoadingScreen,
    allowRedirectBack: false,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || LOG_IN,
    authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
        auth.isLoaded && auth.isEmpty,
    redirectAction: newLoc => (dispatch) => {
        browserHistory.replace(newLoc);
        // dispatch({ type: 'UNAUTHED_REDIRECT' });
    },
});