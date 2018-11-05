import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/authentication/login',
    authenticatedSelector: state => state.user.get('isAuthorized'),
    wrapperDisplayName: 'UserIsAuthenticated',
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    allowRedirectBack: false,
    authenticatedSelector: state => !state.user.get('isAuthorized'),
    wrapperDisplayName: 'UserIsNotAuthenticated',
});
