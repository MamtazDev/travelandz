import React from "react";
import logo from "./assets/logo.svg";
import fa from "./assets/face.png";
import ins from "./assets/Instagram.svg";
import link from "./assets/link.png";
import tw from "./assets/tw.svg";
const Footer = () => {
  return (
    <div className=" py-[60px] mt-[100px] md:mt-[180px] bg-[#ECECED]">
      <div className="container flex flex-col items-center justify-center">
        <img src={logo} alt="" />
        <ul className="flex gap-[30px] mt-[33px]">
          <li>
            <a href="#">
              <img src={fa} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={link} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tw} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ins} alt="" />
            </a>
          </li>
        </ul>
        <p className="mt-[40px] text-[#808080] ">
          © 2023, made with by Travelandz
        </p>
      </div>
    </div>
  );
};

export default Footer;
