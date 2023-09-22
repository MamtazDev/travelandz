import React from "react";
import BannerTable from "../Components/BannerTable/BannerTable";

const HomeBanner = () => {
  return (
    <div className="lg:pt-[20px]">
      <div className="container px-0 mx-auto">
        <div className="w-full  banner-wrap lg:rounded-[20px] ">
          <div className=" pt-[54px] md:pt-[120px] relative pb-[40px] md:pb-[60px]">
            <div className="px-[20px] lg:px-[194px]">
              <h1 className="heading text-center   ">
                Experience Wanderlust at its Finest with AI-Powered Travel
                Planner
              </h1>
              <p className="mt-[24px] subtext-2 text-white text-center">
                Discover the best prices, secure your mobile tickets, and set
                off on a journey of a lifetime.
              </p>
            </div>
          </div>
          <BannerTable></BannerTable>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
