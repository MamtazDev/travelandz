import React, { useState } from "react";
import star from "../assets/starblack.svg";
import reload from "../assets/reload.svg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import layoutIcon from "./../assets/layoutIcon.svg";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import ImageGallery from "react-image-gallery"; // Import the ImageGallery component
import "react-image-gallery/styles/css/image-gallery.css"; // Import the ImageGallery styles
// ... (rest of your imports)
// const images = [img1, img2, img3];
const images = [
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
];
const PlanBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  const openLightbox = (index) => {
    setLightboxOpen(true);
    setActiveImageIndex(index);
  };

  const galleryImages = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
  ];

  return (
    <div>
      <div className="lg:mt-[42px] container">
        {/* upper info */}
        <div className="hidden lg:flex justify-between mb-[40px]">
          <div>
            <h4 className="text-md font-bold text-main-black">
              Hotel de Mar Gran Meliá
            </h4>
            <div className="mt-[8px] text-xs flex gap-[8px] text-main-black ">
              <img className="w-[16px]" src={star} alt="start" />
              <div className="flex gap-[30px]">
                <span>4.3</span>
                <ul className="flex list-disc gap-[30px] ">
                  <li className="underline">(112 reviews)</li>
                  <li className="underline">
                    Paseo de las Illetas, 7, Mallorca
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <button className="flex gap-[16px] items-center">
              <img className="w-[20px]" src={reload} alt="" />
              <span className="text-normal font-semibold text-red-gradient block border-b border-[#DD727D]">
                Try Another Hotel
              </span>
            </button>
          </div>
        </div>

        <div className=" rounded-[20px] h-[470px] overflow-hidden hidden lg:grid grid-rows-2 grid-cols-3 gap-[24px] lg:gird">
          <div className="col-span-2 row-span-2 ">
            <img className="w-full h-full" src={img1} alt="" />
          </div>
          <div>
            <img className="w-full max-h-full" src={img2} alt="" />
          </div>
          <div className="relative">
            <img className="w-full max-h-full" src={img3} alt="" />
            <div className="absolute bottom-[24px] right-[24px]">
              <button
                onClick={() => openLightbox(0)}
                className="flex bg-white py-[10px] px-[16px] text-main-black gap-[16px] font-semibold items-center rounded-[15px]"
              >
                <img src={layoutIcon} alt="" />
                <span>Show all photos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden block">
        <div className="swiper-container relative">
          <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div
                className="w-full h-[350px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="w-full h-[350px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="w-full h-[350px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute bottom-[16px] right-[20px] px-[10px] py-[5px] rounded-[10px] bg-black/[0.80] text-white text-xs z-10">
            <span className=" ">{activeIndex + 1}</span> /3
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="container  lg:hidden">
        <div className="   mt-[24px]">
          <div>
            <h4 className="text-md font-bold text-main-black">
              Hotel de Mar Gran Meliá
            </h4>
            <div className=" mt-[14px] text-xs flex items-start gap-x-[8px] text-main-black ">
              <img className="w-[16px]" src={star} alt="start" />
              <div className="">
                <p>
                  4.3 • <span className="underline">(112 reviews)</span> •{" "}
                  <br />{" "}
                  <span className="underline">
                    Paseo de las Illetas, 7, Mallorca
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pc */}
      {lightboxOpen && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/80  ">
            <div className="mt-2 max-h-[95vh] ">
              <ImageGallery
                items={galleryImages}
                startIndex={activeImageIndex}
                // showThumbnails={false}
                showPlayButton={false}
                onClose={() => setLightboxOpen(false)}
              />
            </div>
          </div>
          <div className="fixed  right-[20px]  top-[20px] z-50">
            <button onClick={() => setLightboxOpen(false)}>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 384 512"
              >
                {" "}
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PlanBanner;
