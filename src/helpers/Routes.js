import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthedView from '../views/AuthedView';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';

const AuthedRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

AuthedRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

export default function Routes({ user, admin }) {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={Home}
        />
        <AuthedRoute
        exact
        admin={admin}
        path='/projects'
        component={() => <Projects admin={admin}/>}
        />
        <Route
        exact
        path='/technologies'
        component={Technologies}
        />
        <Route
        exact
        path='/authed'
        component={() => <AuthedView user={user}/>}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};
