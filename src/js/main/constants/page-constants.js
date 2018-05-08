import { userIsNotAuthenticated } from 'main/tools/auth-tool';

import Authentication from 'authentication/components/authentication';
import LoginPage from 'authentication/components/login-page/login-page';

import MainPage from 'main-page/components/main-page/main-page';

export default [
    {
        path: '/authentication',
        component: userIsNotAuthenticated(Authentication),
        exact: true,
        routes: [
            {
                path: '/authentication/login',
                component: userIsNotAuthenticated(LoginPage),
            },
        ],
    },
    {
        path: '/',
        component: MainPage,
        exact: true,
    },
];
