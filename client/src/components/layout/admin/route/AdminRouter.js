import React from "react";
import { Route } from "react-router-dom";

//hooks
// import usePrivateRoute from "../../../hooks/auth/usePrivateRoute";
import useAuthenticate from "../../../hooks/auth/useAuthenticate";

// admin
import Dashboard from "../Dashboard";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const AdminRouter = () => {
  // const { PrivateRoute } = usePrivateRoute();
  const { isAuthenticated } = useAuthenticate();

  return (
    <>
      {isAuthenticated() && <Dashboard />}
      {/* auth */}
      <Route exact path="/admin/signin" component={Signin} />
      <Route exact path="/admin/signup" component={Signup} />
    </>
  );
};

export default AdminRouter;
