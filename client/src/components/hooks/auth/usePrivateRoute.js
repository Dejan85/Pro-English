import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// hooks
import useAutthenticate from './useAuthenticate';

const usePrivateRoute = () => {
  const { isAuthenticated } = useAutthenticate();

  const PrivateRoute = ({ component: Component, ...rest }) => {
    // props means components passed down to rhis pricate route component
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated()
            ? <Component {...props} />
            : <Redirect
              to={{
                pathname: '/dashboard/signin',
                state: { from: props.location }
              }}
              />}
      />
    );
  };

  return {
    PrivateRoute
  };
};

export default usePrivateRoute;
