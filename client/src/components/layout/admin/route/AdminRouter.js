import React from "react";
import { Route } from "react-router-dom";

// admin
import Dashboard from "../Dashboard";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const AdminRouter = () => {
  return (
    <>
      <Route exact path="/admin" component={Dashboard} />
      <Route exact path="/admin/signin" component={Signin} />
      <Route exact path="/admin/signup" component={Signup} />
    </>
  );
};

export default AdminRouter;
