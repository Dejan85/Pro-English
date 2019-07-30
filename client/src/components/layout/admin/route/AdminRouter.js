import React, { useState } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";

// hooks
// import usePrivateRoute from '../../../hooks/auth/usePrivateRoute'
import useAuthenticate from "../../../hooks/auth/useAuthenticate";

// admin
import Dashboard from "../Dashboard";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const AdminRouter = props => {
  // const { PrivateRoute } = usePrivateRoute()
  const { isAuthenticated } = useAuthenticate();
  const [dashboardHandler] = useState(() => {
    return (
      props.history.location.pathname === "/admin" ||
      props.history.location.pathname === "/admin/blog" ||
      props.history.location.pathname === "/admin/blog/add" ||
      props.history.location.pathname === "/admin/events/add"
    );
  });

  return (
    <>
      {(isAuthenticated() && dashboardHandler && <Dashboard />) ||
        (!isAuthenticated() && <Redirect to="/admin/signin" />)}
      <Route exact path="/admin/signin" component={Signin} />
      <Route exact path="/admin/signup" component={Signup} />
    </>
  );
};

export default withRouter(AdminRouter);
