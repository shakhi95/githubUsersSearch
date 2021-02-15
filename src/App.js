import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";

//pages
import { Dashboard, Login, Error, PrivateRoute } from "./pages";

const App = () => {
  //
  return (
    <HashRouter basename="/">
      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>
        <Route path="/login" exact component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </HashRouter>
  );
};

export default App;
