import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';

const Authentication = ({ routes }) => (
    <div>
        <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
            <Redirect from="/authentication" to="/authentication/login" />
        </Switch>
    </div>
);

Authentication.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
        exact: PropTypes.bool,
    })).isRequired,
};

export default Authentication;
