import React, { useState } from "react";
import arrow from "./assets/arrow.svg";

import pluse from "./assets/pluse.svg";
import SingleAccordionContent from "../SingleAccordionContent/SingleAccordionContent";
const RecommendationAccordion = () => {
  const [isOpen, setIsOpen] = useState(0);
  const data = [0, 1, 2, 3];

  return (
    <div className="flex flex-col gap-[24px]">
      {data.map((single) => (
        <div
          key={single}
          className={`rounded-[20px] border border-[#F2F2F2] overflow-hidden accordion-main-container w-full ${
            single === isOpen ? "active" : ""
          }`}
        >
          <>
            <button
              onClick={() => setIsOpen(single)}
              className={`flex border h-[72px] py-[25px] px-[24px] justify-between transition-all items-center w-full ${
                isOpen === single
                  ? "bg-[#F1F1F1] "
                  : "bg-transparent border-transparent"
              }`}
            >
              <div className="flex gap-[40px] items-center">
                <h4 className="text-main-black font-bold">Day {single + 1}</h4>
                <span className="text-xs text-[#8E8E92]">
                  0{single + 3} june 2023
                </span>
              </div>
              <img
                src={arrow}
                className={`${
                  isOpen === single ? "rotate-0" : "rotate-180"
                } transition-all`}
                alt="down"
              />
            </button>
          </>
          <div
            className={`accordion-wrap grid  ${
              isOpen === single ? "open" : ""
            }`}
          >
            <SingleAccordionContent></SingleAccordionContent>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationAccordion;
