import React from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
const DiscoverSlider = () => {
  const data = [
    { img: img4, title: "dubai" },
    { img: img1, title: "dubai" },
    { img: img2, title: "petra" },
    { img: img3, title: "Istanbul" },
    { img: img1, title: "dubai" },
    { img: img2, title: "petra" },
  ];
  const pagination = {
    clickable: true,
  };
  return (
    <div className="">
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        initialSlide={1}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        navigation={{
          nextEl: ".discover-swiper-button-next",
          prevEl: ".discover-swiper-button-prev",
        }}
        className="discover-slider-wrap"
        modules={[Navigation, Pagination]}
        pagination={pagination}
      >
        {data.map((single, i) => (
          <SwiperSlide key={i}>
            <DiscoverCard {...single}></DiscoverCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscoverSlider;
