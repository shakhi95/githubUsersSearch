import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  //
  const { logout, isAuthenticated, user } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <div className="bg-info shadow-sm mb-5 py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            {isUser && user.picture && (
              <img
                className="rounded-circle me-2"
                src={user.picture}
                alt="Avatar"
                style={{ width: "35px", height: "35px" }}
              />
            )}
            {isUser && user.name && (
              <h6 className="m-0">
                Welcome, <strong>{user.name}</strong>
              </h6>
            )}
          </div>
          <div>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
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
