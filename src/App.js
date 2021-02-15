import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";

//pages
import { Dashboard, Login, Error, Auth0Wrapper, PrivateRoute } from "./pages";

const App = () => {
  //
  return (
    <Auth0Wrapper>
      <HashRouter basename="/">
        <Switch>
          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login" exact component={Login} />
          <Route path="*" component={Error} />
        </Switch>
      </HashRouter>
    </Auth0Wrapper>
  );
};

export default App;
