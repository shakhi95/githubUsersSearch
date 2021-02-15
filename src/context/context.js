import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import mockGitUser from "./mockData/mockUser";
import mockGitRepos from "./mockData/mockRepos";
import mockGitFollowers from "./mockData/mockFollowers";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //
  const [gitUser, setGitUser] = useState(mockGitUser);
  const [followers, setFollowers] = useState(mockGitFollowers);
  const [repos, setRepos] = useState(mockGitRepos);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState({
    visibility: "hidden",
    mssg: "some error",
  });
  const [loading, setLoading] = useState(false);
  const [reqRate, setReqRate] = useState({ used: 0, limit: 60 });

  const checkRate = () => {
    axios
      .get("https://api.github.com/rate_limit")
      .then(({ data: { rate } }) => {
        setReqRate({ used: rate.used, limit: rate.limit });
        if (rate.remaining === 0) {
          setError({
            visibility: "visible",
            mssg: "Sorry, you have exceeded your hourly rate limit!",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const searchGitUser = async () => {
    //
    setLoading(true);
    setError({
      visibility: "hidden",
      mssg: "some error",
    });

    const responde = await axios(
      `https://api.github.com/users/${searchTerm}`
    ).catch((err) => console.log(err));

    if (responde) {
      setGitUser(responde.data);

      axios
        .get(responde.data.followers_url + "?per_page=100")
        .then((res) => setFollowers(res.data))
        .catch((err) => console.log(err));

      axios
        .get(responde.data.repos_url + "?per_page=100")
        .then((res) => setRepos(res.data))
        .catch((err) => console.log(err));
      //
    } else {
      //
      setError({
        visibility: "visible",
        mssg: "There is NO USER with this username",
      });
      setGitUser([]);
      setFollowers([]);
      setRepos([]);
    }

    setLoading(false);
  };

  useEffect(checkRate, [gitUser, followers, repos]);

  return (
    <AppContext.Provider
      value={{
        gitUser,
        followers,
        repos,
        searchTerm,
        setSearchTerm,
        error,
        loading,
        reqRate,
        searchGitUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGloabalValues = () => {
  return useContext(AppContext);
};

export { AppProvider, useGloabalValues };
