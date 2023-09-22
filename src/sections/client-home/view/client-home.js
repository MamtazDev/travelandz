import React from "react";
import HomeTopBar from "../Components/HomeTopBar/HomeTopBar";
import HomeBanner from "./../HomeBanner/HomeBanner";
import Unparalleled from "./../Unparalleled/Unparalleled";
import Discover from "./../Discover/Discover";
import Help from "./../Help/Help";
import Footer from "../Components/Footer/Footer";
import "./../App.css";
import "./../index.css";

const ClientHome = () => {
  return (
    <div className="mx-auto"> {/* Apply text-center class here */}
      <HomeTopBar></HomeTopBar>
      <HomeBanner></HomeBanner>
      <Unparalleled></Unparalleled>
      <Discover></Discover>
      <Help></Help>
      <Footer></Footer>
    </div>
  );
};

export default ClientHome;
