import React, { useEffect, useContext, useState } from "react";

const UserContext = React.createContext();

const getDataLS = () => {
  let user = { signIn: false, name: "" };

  if (localStorage.getItem("githubsearch-user")) {
    user = JSON.parse(localStorage.getItem("githubsearch-user"));
  }

  return user;
};

const UserProvider = ({ children }) => {
  //
  const [user, setUser] = useState(getDataLS());

  useEffect(() => {
    localStorage.setItem("githubsearch-user", JSON.stringify(user));
  }, [user]);

  const signIn = (name) => {
    setUser({ signIn: true, name });
  };

  const signOut = () => {
    setUser({ signIn: false, name: "" });
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserValues = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserValues };
