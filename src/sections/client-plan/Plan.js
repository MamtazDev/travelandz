import React from "react";
import HomeTopBar from "../Components/HomeTopBar/HomeTopBar";
import PlanBanner from "./PlanBanner/PlanBanner";
import PlanMainContent from "../../Components/PlanMainContent/PlanMainContent";
import Footer from "../../Components/Footer/Footer";
import PlanTopBar from "../../Components/PlanTopBar/PlanTopBar";

const Plan = () => {
  return (
    <div>
      <PlanTopBar></PlanTopBar>
      <PlanBanner></PlanBanner>
      <PlanMainContent></PlanMainContent>
      <Footer></Footer>
    </div>
  );
};

export default Plan;
