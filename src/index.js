import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { AppProvider } from "./context/context";

ReactDOM.render(
  <Auth0Provider
    domain="dev-aaghp1wc.us.auth0.com"
    clientId="qLylBgZohleB2AdEgnbA3vLs30LvmN2k"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>,
  document.querySelector("#root")
);
