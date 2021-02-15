import React from "react";

import { Navbar, Search, Info, User, Repos } from "../components";
import { useGloabalValues } from "../context/context";
import loadingImg from "../images/preloader.gif";

const Dashboard = () => {
  //
  const { loading } = useGloabalValues();

  if (loading) {
    return (
      <div className="min-vh-100 pb-5" style={{ backgroundColor: "#e0fcff" }}>
        <Navbar />
        <Search />
        <div className="text-center mt-5">
          <img src={loadingImg} alt="loading..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 pb-5" style={{ backgroundColor: "#e0fcff" }}>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </div>
  );
};

export default Dashboard;
