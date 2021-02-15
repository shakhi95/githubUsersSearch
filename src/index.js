import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppProvider } from "./context/context";
import { UserProvider } from "./context/user_context";

ReactDOM.render(
  <UserProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </UserProvider>,
  document.querySelector("#root")
);
