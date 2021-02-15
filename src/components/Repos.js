import React from "react";
import { useGloabalValues } from "../context/context";

import { Doughnut2D, Column3D, Pie3D, Bar3D } from "./charts";

const Repos = () => {
  //
  const { repos } = useGloabalValues();

  const languagesData = () => {
    let lang = {};
    repos.forEach(({ language, stargazers_count }) => {
      if (!language) return;
      if (!lang[language]) {
        lang[language] = { label: language, value: 1, stars: stargazers_count };
      } else {
        lang[language] = {
          label: language,
          value: lang[language].value + 1,
          stars: lang[language].stars + stargazers_count,
        };
      }
    });

    const mostUsedLan = Object.values(lang)
      .sort((a, b) => {
        return b.value - a.value;
      })
      .slice(0, 5);

    const mostStaredLan = Object.values(lang)
      .sort((a, b) => {
        return b.stars - a.stars;
      })
      .slice(0, 5);

    return { mostUsedLan, mostStaredLan };
  };

  const reposData = () => {
    let mostReposData = {};

    repos.forEach(({ stargazers_count, name, forks }) => {
      mostReposData[name] = { name, forks, stars: stargazers_count };
    });

    const mostStaredRepos = Object.values(mostReposData)
      .sort((a, b) => b.stars - a.stars)
      .slice(0, 5);

    const mostForkedRepos = Object.values(mostReposData)
      .sort((a, b) => b.forks - a.forks)
      .slice(0, 5);

    return { mostStaredRepos, mostForkedRepos };
  };

  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row">
        <Pie3D data={languagesData().mostUsedLan} />
        <Column3D data={reposData().mostStaredRepos} />
      </div>
      <div className="d-flex flex-column flex-md-row">
        <Bar3D data={reposData().mostForkedRepos} />
        <Doughnut2D data={languagesData().mostStaredLan} />
      </div>
    </div>
  );
};

export default Repos;
