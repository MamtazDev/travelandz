import React, { useState } from "react";
import PlanTextInfo from "../PlanTextInfo/PlanTextInfo";
import CheckoutBox from "../CheckoutBox/CheckoutBox";
import arrow from "./assets/arrow-down.svg";
const PlanMainContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="container ">
        <div className="lg:flex gap-[24px] mt-[40px]">
          {/* text content */}
          <PlanTextInfo></PlanTextInfo>
          <div className="min-w-[412px] lg:block hidden ">
            <div className="sticky top-[20px]">
              <CheckoutBox></CheckoutBox>
            </div>
          </div>
        </div>
        <div className="fixed z-30 bottom-0 left-0 right-0 bg-white lg:hidden flex pt-[10px] px-[20px] pb-[16px] items-center justify-between border-t border-[#EAEAEA] ">
          <div>
            <h2 className="text-base font-bold text-main-black mb-[4px]">
              $75
            </h2>
            <button className="flex gap-[8px]" onClick={() => setOpen(!open)}>
              <span className="text-black text-xs">Hotel only</span>
              <img src={arrow} alt="down" />
            </button>
          </div>
          <div>
            <button className="btn-red-gradient">Checkout</button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 flex items-end h-full z-30 w-full left-1/2 -translate-x-1/2 transition-all duration-700 lg:hidden ${
          open
            ? "translate-y-0 pointer-events-auto"
            : "translate-y-full pointer-events-none"
        } `}
      >
        <div className="w-full" onClick={(e) => e.stopPropagation()}>
          <CheckoutBox></CheckoutBox>
        </div>
      </div>
    </div>
  );
};

export default PlanMainContent;
