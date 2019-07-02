import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";

//hooks
// import usePrivateRoute from "../../../hooks/auth/usePrivateRoute";
import useAuthenticate from "../../../hooks/auth/useAuthenticate";

// admin
import Dashboard from "../Dashboard";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const AdminRouter = props => {
  // const { PrivateRoute } = usePrivateRoute();
  const { isAuthenticated } = useAuthenticate();

  const redirect = () => {
    if (props.history.location.pathname === "/admin") {
      return <Redirect to="/admin/signin" />;
    }
  };

  return (
    <>
      {isAuthenticated() && <Dashboard />}
      {/* auth */}
      {redirect()}
      <Route exact path="/admin/signin" component={Signin} />
      <Route exact path="/admin/signup" component={Signup} />
    </>
  );
};

export default withRouter(AdminRouter);
