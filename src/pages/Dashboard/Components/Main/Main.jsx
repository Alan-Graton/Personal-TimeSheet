import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/index";

/* BUTTONS */
// Pages
import Home from "../Sidebar/Components/Buttons/Home/index";
import Launch from "../Sidebar/Components/Buttons/Launch/index";
import Query from "../Sidebar/Components/Buttons/Query/index";

function Main() {
  const [homePage, setHomePage] = useState(false);
  const handleHomePageClick = (event) => {
    event.preventDefault();
    setHomePage(!homePage);
    setLaunchPage(false);
    setQueryPage(false);
  };
  const [launchPage, setLaunchPage] = useState(false);
  const handleLaunchPageClick = (event) => {
    event.preventDefault();
    setLaunchPage(!launchPage);
    setHomePage(false);
    setQueryPage(false);
  };
  const [queryPage, setQueryPage] = useState(false);
  const handleQueryPageClick = (event) => {
    event.preventDefault();
    setQueryPage(!queryPage);
    setHomePage(false);
    setLaunchPage(false);
  };
  return (
    <div>
      {/* Passar o useState "homePage" como "prop" para o Header */}
      <Header HeaderAvatarClick={handleHomePageClick} />
      <Sidebar
        HomePageClick={handleHomePageClick}
        LaunchPageClick={handleLaunchPageClick}
        QueryPageClick={handleQueryPageClick}
      />
      {homePage ? <Home /> : null}
      {launchPage ? <Launch /> : null}
      {queryPage ? <Query /> : null}
    </div>
  );
}

export default Main;
