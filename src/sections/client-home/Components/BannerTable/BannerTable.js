import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BannerTable = () => {
  const [isBusiness, setIsBusiness] = useState(true);
  const [startDate, setStartDate] = useState();
  const [startDate2, setStartDate2] = useState();

  return (
    <div className="flex justify-center relative px-[20px] md:px-0 pb-[68px] md:pb-[121px]">
      <div className="max-w-[1066px] w-full bg-white rounded-[20px] px-[16px] pt-[26px] md:pl-[24px] md:pr-[25px] md:pb-[28px] pb-[34px]">
        {/* tabs area */}

        <div className="flex gap-[23px] banner-tab-area items-center text-xs text-[#69696E] font-normal">
          <button
            onClick={() => setIsBusiness(true)}
            className={`${isBusiness ? "active" : ""}`}
          >
            Business Trip
          </button>
          <button
            onClick={() => setIsBusiness(false)}
            className={`${!isBusiness ? "active" : ""}`}
          >
            Vacationing
          </button>
        </div>
        {/* content ara */}
        <div className="flex md:flex-row flex-col gap-[32px] md:gap-[24px] items-end mt-[16px] md:mt-[28px] ">
          <div className="flex gap-[21px] md:gap-x-[24px] gap-y-[16px] w-full flex-wrap">
            <div className="md:max-w-[279px] block w-full">
              <h4 className="mb-[8px] text-xs font-medium text-black">
                Destination
              </h4>
              <input
                className="md:max-w-[279px] block w-full min-w-[200px] px-[16px] md:px-[24px] pt-[12px] pb-[15px] rounded-[100px] placeholder:text-[#8E8E92] h-[47px] text-xs border border-[#DFDFDF] focus:outline-none"
                type="text"
                placeholder="What is your destination"
              />
            </div>
            <div className="max-w-[150px] md:max-w-[160px] min-w-[100px] ">
              <h4 className="mb-[8px] text-xs font-medium text-black">
                Check-in
              </h4>

              <DatePicker
                className="max-w-[150px] md:max-w-[160px] min-w-[100px] block  px-[16px] md:px-[24px] pt-[12px] pb-[15px] rounded-[100px] placeholder:text-[#8E8E92] h-[47px] appearance-none text-xs border border-[#DFDFDF] focus:outline-none"
                type="date"
                placeholderText="DD/MM/YYYY"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="max-w-[150px] md:max-w-[160px] min-w-[100px] ">
              <h4 className="mb-[8px] text-xs font-medium text-black">
                Check-out
              </h4>

              <DatePicker
                className="max-w-[150px] md:max-w-[160px] min-w-[100px] block  px-[16px] md:px-[24px] pt-[12px] pb-[15px] rounded-[100px] placeholder:text-[#8E8E92] h-[47px] appearance-none text-xs border border-[#DFDFDF] focus:outline-none"
                type="date"
                placeholderText="DD/MM/YYYY"
                selected={startDate2}
                onChange={(date) => setStartDate2(date)}
              />
            </div>
            <div className="">
              <h4 className="mb-[8px] text-xs font-medium text-black">
                Guests
              </h4>

              <input
                className="max-w-[140px] block w-full px-[16px] md:px-[24px] pt-[12px] pb-[15px] rounded-[100px] placeholder:text-[#8E8E92] h-[47px] appearance-none text-xs border border-[#DFDFDF] focus:outline-none"
                type="number"
                placeholder="1"
              />
            </div>
          </div>

          <button className="btn-red-gradient w-full md:w-auto whitespace-nowrap">
            Explore Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTable;
