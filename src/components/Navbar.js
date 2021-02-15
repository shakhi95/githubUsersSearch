import React from "react";
import { useUserValues } from "../context/user_context";

const Navbar = () => {
  //
  const {
    signOut,
    user: { name },
  } = useUserValues();

  return (
    <div className="bg-info shadow-sm mb-5 py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h5 className="m-0 text-capitalize">Hi , {name}</h5>
          </div>
          <div>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={signOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
