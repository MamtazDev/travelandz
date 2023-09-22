import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import userLogo from "./assets/userLogo.svg";
import close from "./assets/close-line.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import menu from "../PlanTopBar/assets/menu.svg";
import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scroll";
const HomeTopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      // Call your function here
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const user = (
    <>
      {!isLoggedIn ? (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="btn-red-gradient"
        >
          Sign in
        </button>
      ) : (
        <button className="w-[44px] h-[44px] flex justify-center items-center rounded-full bg-white border transition-all hover:bg-[#EC6274] border-[#EAEAEA]">
          <img className="w-[20px] " src={userLogo} alt="" />
        </button>
      )}
    </>
  );
  const items = (
    <ul className="flex flex-col lg:flex-row gap-4 items-center lg:gap-[32px] text-normal lg:text-xs text-main-black nav-items-wrap">
      <li>
        <a href="/#about" title="About Travelandz">
          About Travelandz
        </a>
      </li>
      <li>
        <a href="/#discover" title="Famous destinations">
          Famous destinations
        </a>
      </li>
      <li>
        <a href="/#contact" title="Contact us">
          Contact us
        </a>
      </li>
    </ul>
  );

  return (
    <div className="pb-[90px]">
      <div className="w-full fixed top-0 left-0 right-0 z-50 bg-[#FBFBFB]">
        <div className="container ">
          <div className="flex justify-between items-center py-[23px]">
            <Link to="/">
              <img onClick={scrollToTop} src={logo} alt="logo" />
            </Link>
            <div className="lg:block hidden">{items}</div>
            <div className="lg:block hidden">{user}</div>
            <div onClick={toggleDrawer} className="block lg:hidden">
              <button className="group relative">
                <img src={menu} alt="" />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto bg-white w-[200px] py-4 rounded-lg top-[50px] left-full z-30 -translate-x-full shadow-2xl border ">
                  <div>
                    {items}
                    <div className="flex justify-center mt-4">{user}</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBar;
