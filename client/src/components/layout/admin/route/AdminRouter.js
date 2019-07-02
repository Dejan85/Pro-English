import React from "react";
import { Route } from "react-router-dom";

//hooks

import usePrivateRoute from "../../../hooks/auth/usePrivateRoute";

// admin
import Dashboard from "../Dashboard";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import AddBlog from "../../../layout/admin/partials/blog/AddBlog";

const AdminRouter = () => {
  const { PrivateRoute } = usePrivateRoute();
  return (
    <>
      <PrivateRoute exact path="/admin" component={Dashboard} />
      <Route exact path="/admin/signin" component={Signin} />
      <Route exact path="/admin/signup" component={Signup} />
    </>
  );
};

export default AdminRouter;
