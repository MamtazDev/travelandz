import React, { useState } from "react";
import pluse from "../RecommendationAccordion/assets/pluse.svg";
import thum from "../RecommendationAccordion/assets/thum.jpg";
import location from "../RecommendationAccordion/assets/location.svg";
import user from "../RecommendationAccordion/assets/user.svg";
import deleteIcon from "../RecommendationAccordion/assets/deleteIcon.svg";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
const SingleAccordionContent = () => {
  const [activeTab, setActiveIndex] = useState(0);
  const card = (
    <div className="w-full border max-w-[321px] min-w-[321px] lg:max-w-full lg:w-[387px] lg:min-w-[387px] border-[#EAEAEA] rounded-[15px]">
      <div
        style={{ backgroundImage: `url(${thum})` }}
        className="rounded-t-[15px]   flex justify-end pt-[16px] px-[16px] h-[140px] w-full bg-cover bg-center items-start"
      >
        <button>
          <img className="" src={deleteIcon} alt="" />
        </button>
      </div>
      <div className="px-[16px] mt-[16px] pb-[16px]">
        <h2 className="text-main-black font-bold text-normal">
          Alcudia Bay 50-minutes tour from Alcudia
        </h2>
        <div className="flex text-[#8E8E92] text-xs mt-[10px] items-center gap-[24px]">
          <p className="flex gap-[8px] items-center">
            <img src={location} alt="" />
            <span>Carrer de la Mareperla</span>
          </p>
          <p className="flex gap-[8px] items-center">
            <img src={user} alt="" />
            <span>2 pax</span>
          </p>
        </div>
        <h6 className="text-black text-base font-bold mt-[16px]">USD 344</h6>
      </div>
    </div>
  );
  const checkActive = (index) => (index === activeTab ? "active" : "");
  return (
    <div className="min-h-0  accordion-content-wrap  w-full transition-all">
      <div className="px-[16px] lg:px-[24px]  w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-[16px] recommendation-tabs">
            <button
              onClick={() => setActiveIndex(0)}
              className={`${checkActive(0)} px-[16px] py-[7px] text-xs`}
            >
              Morning
            </button>
            <button
              onClick={() => setActiveIndex(1)}
              className={`${checkActive(1)} px-[16px] py-[7px] text-xs`}
            >
              Afternoon
            </button>
            <button
              onClick={() => setActiveIndex(2)}
              className={`${checkActive(2)} px-[16px] py-[7px] text-xs`}
            >
              Dining
            </button>
            <button></button>
          </div>
          <div className="lg:block hidden">
            <button className="flex gap-[8px]">
              <img src={pluse} alt="add" />
              <span className="text-[#EC6274] font-semibold underline">
                Add activity
              </span>
            </button>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] lg:max-w-[544px] 4lg:max-w-[578px] lg:w-full  xl:w-full xl:max-w-[800px] pr-0  mt-[26px] pb-4 lg:pb-1 custom-scrollbar h-[511px] lg:h-full  overflow-y-scroll xl:overflow-y-visible">
          <div className="flex flex-col items-center  xl:hidden gap-[20px]   ">
            {[...new Array((activeTab + 1) * 2)].map((single, i) => (
              <div className="" key={i}>
                {card}
              </div>
            ))}
          </div>
          <div className="hidden xl:block">
            <Swiper
              freeMode={true}
              modules={[FreeMode]}
              spaceBetween={16}
              breakpoints={{
                1280: {
                  spaceBetween: 16,
                  slidesPerView: 2,
                },
                1080: {
                  spaceBetween: 16,
                  slidesPerView: 1,
                },
              }}
              slidesPerView={2}
            >
              {[...new Array((activeTab + 1) * 2)].map((single, i) => (
                <SwiperSlide className="" key={i}>
                  {card}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* footer */}
      </div>
      <div className="rounded-b-[20px] w-full border-t flex lg:hidden justify-center border-[#E4E4E4] ">
        <button className="flex gap-[8px] py-[16px]">
          <img src={pluse} alt="add" />
          <span className="text-[#EC6274] font-semibold underline">
            Add activity
          </span>
        </button>
      </div>
    </div>
  );
};

export default SingleAccordionContent;
