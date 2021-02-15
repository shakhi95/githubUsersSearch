import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserValues } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  //
  const {
    user: { signIn },
  } = useUserValues();

  return (
    <Route
      {...rest}
      render={() => {
        return signIn ? children : <Redirect to="/login"></Redirect>;
      }}
    />
  );
};

export default PrivateRoute;
