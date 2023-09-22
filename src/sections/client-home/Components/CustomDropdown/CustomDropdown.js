import React, { useState } from "react";
import down from "./assets/down.svg";

const CustomDropdown = ({
  imgStyle,
  options,
  defaultSelectIndex,
  innerWarpStyle,
  arrowStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options[defaultSelectIndex || 0]
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative ">
        <button className="block w-full" onClick={() => setIsOpen(!isOpen)}>
          <div className={`flex items-center gap-[8px] ${innerWarpStyle}`}>
            {selectedOption.image && (
              <img
                src={selectedOption.image}
                alt={selectedOption.label}
                className={` ${imgStyle || "max-w-[25px] "}`}
              />
            )}
            {selectedOption.label && (
              <div className=" text-xs font-medium">{selectedOption.label}</div>
            )}
            <img className={arrowStyle} src={down} alt="" />
          </div>
        </button>
        {isOpen && (
          <ul className="absolute z-40 mt-2 py-1 w-full border bg-white border-gray-400 rounded shadow">
            {options.map((option) => (
              <li
                key={option.value}
                className="cursor-pointer px-2 justify-center py-2 hover:opacity-80 transition-all opacity-100 gap-[5px] flex"
                onClick={() => handleOptionClick(option)}
              >
                {option.image && (
                  <img
                    src={option.image}
                    alt={option.label}
                    className={` ${imgStyle || "max-w-[25px] "}`}
                  />
                )}
                {option.label && (
                  <div className=" text-xs font-medium">{option.label}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed  inset-0 z-30"
        ></div>
      )}
    </div>
  );
};

export default CustomDropdown;
