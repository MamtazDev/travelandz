import React from "react";
import logo from "../HomeTopBar/assets/logo.svg";
import bell from "./assets/bell.svg";
import userBlack from "./assets/userBlack.svg";
import menu from "./assets/menu.svg";

import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scroll";
const PlanTopBar = () => {
  const options = [{ image: userBlack, label: "John doe", value: "John doe" }];
  const options2 = [
    { label: "USD", value: "USD" },
    { label: "USD2", value: "USD2" },
    { label: "USD3", value: "USD2" },
  ];

  const content = (
    <div className="flex flex-col lg:flex-row  gap-[32px] items-center">
      <button className="effect">
        <img src={bell} alt="notification" />
      </button>
      <div>
        <CustomDropdown options={options2}></CustomDropdown>
      </div>
      <div>
        <CustomDropdown
          innerWarpStyle={
            "border px-[16px] py-[12px] border-[#EAEAEA] rounded-[100px]"
          }
          arrowStyle={"ml-[2px]"}
          options={options}
        ></CustomDropdown>
      </div>
    </div>
  );
  return (
    <div className="pb-[92px]">
      <div className="w-full nav-wrap z-20 fixed top-0 left-0 right-0">
        <div className="container ">
          <div className="flex justify-between items-center py-[23px]">
            <Link to="/">
              <img onClick={scrollToTop} src={logo} alt="logo" />
            </Link>
            <div className="hidden lg:block">{content}</div>
            <div className="block lg:hidden">
              <button className="group relative">
                <img src={menu} alt="" />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto bg-white w-[200px] py-4 rounded-lg top-[50px] left-full -translate-x-full shadow-2xl border ">
                  {content}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTopBar;
