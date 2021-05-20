import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   const routeChecker = (taco) => (user
//     ? (<Component {...taco} user={user} />)
//     : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.func,
//   user: PropTypes.any
// };

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={Home}
        />
      </Switch>
    </div>
  );
}

// Routes.propTypes = {
//   players: PropTypes.array,
//   setPlayers: PropTypes.func,
//   user: PropTypes.any
// };
