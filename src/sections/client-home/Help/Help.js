import React from "react";
import sendIcon from "./assets/arrow-top-right-1.svg";
const Help = () => {
  return (
    <div className="mt-[100px] md:mt-[180px] scroll-md-[300px]" id="contact">
      <div className="container mx-auto">
        <div className="flex justify-center md:text-center ">
          <div className="max-w-[848px] mb-[40px] md:mb-[60px]">
            <h2 className="heading-1 mb-[24px]">How Can We Help?</h2>
            <p className="max-w-[848px]">
              Travelandz is an AI trip planner that uses the tools of travel
              agencies, allowing it to offer the best price for hotels and
              activities available.
            </p>
          </div>
        </div>
        <div className="max-w-[521px] mx-auto contact-form rounded-[20px] p-[16px] md:p-[32px] pt-[40px] md:pt-[33px] bg-white">
          <div className="mb-[16px]">
            <h2 className="mb-[8px] text-xs text-black font-medium">
              Your name
            </h2>
            <input
              placeholder="Your name"
              className="block placeholder:text-[#B5B5B5] text-xs w-full rounded-[100px] border border-[#E7E7E7] px-[24px] py-[15px] focus:outline-none h-[50px]"
              type="text"
            />
          </div>
          <div className="mb-[16px]">
            <h2 className="mb-[8px] text-xs text-black font-medium">
              Phone number
            </h2>
            <input
              placeholder="Your phone number"
              className="block placeholder:text-[#B5B5B5] text-xs w-full rounded-[100px] border border-[#E7E7E7] px-[24px] py-[15px] focus:outline-none h-[50px]"
              type="text"
            />
          </div>
          <div className="mb-[16px]">
            <h2 className="mb-[8px] text-xs text-black font-medium">
              Your email address
            </h2>
            <input
              placeholder="Your email address"
              className="block placeholder:text-[#B5B5B5] text-xs w-full rounded-[100px] border border-[#E7E7E7] px-[24px] py-[15px] focus:outline-none h-[50px]"
              type="email"
            />
          </div>
          <div className="mb-[40px]">
            <h2 className="mb-[8px] text-xs text-black font-medium">Message</h2>
            <textarea
              placeholder="How can we help?"
              className="block placeholder:text-[#B5B5B5] text-xs w-full rounded-[20px] border border-[#E7E7E7] px-[24px] py-[15px] focus:outline-none h-[120px] resize-none"
              type="email"
            />
          </div>
          <button className="btn-red-gradient mb-[32px] flex gap-[10px] justify-center items-center w-full">
            <span>Send Inquiry</span>
            <img className="w-[20px] h-[20px]" src={sendIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
