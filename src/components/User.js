import React from "react";

import Card from "./Card";
import Followers from "./Followers";

const User = () => {
  //
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row">
        <Card />
        <Followers />
      </div>
    </div>
  );
};

export default User;
