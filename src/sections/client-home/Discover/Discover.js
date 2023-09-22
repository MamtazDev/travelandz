import React from "react";
import DiscoverSlider from "../Components/DiscoverSlider/DiscoverSlider";

const Discover = () => {
  return (
    <div
      id="discover"
      className="container mt-[100px] md:mt-[180px] scroll-m-[200px] mx-auto"
    >
      <div className="flex justify-between">
        <div className="max-w-[872px] mb-[60px]">
          <h2 className="heading-1 mb-[24px]">
            Discover Unique Destinations with AI Trip Itinerary.
          </h2>
          <p className="max-w-[848px]">
            Explore our AI's handpicked selection of the top 10 unique cities
            and create lifelong vacation's memories using AI trip planner. Use
            Travelandz AI planner to experience local culture and nature in
            these breathtaking destinations.
          </p>
        </div>
        <div className="hidden md:flex gap-[24px]">
          <button className="w-[70px] h-[70px] flex justify-center border border-main-red items-center rounded-full text-main-400 hover:bg-main-red transition-all group discover-swiper-button-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className=" fill-main-red group-hover:fill-white transition-all"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button className="w-[70px] h-[70px] flex justify-center border border-main-red items-center rounded-full text-main-400 hover:bg-main-red transition-all group discover-swiper-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className=" fill-main-red group-hover:fill-white transition-all"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <DiscoverSlider></DiscoverSlider>
      </div>
    </div>
  );
};

export default Discover;
