import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useContext } from "react";
import Counter from "./Counter";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Calender from "./calender";
import info from "../../assets/agent/info.png";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../checkout/context/checkout-context";

const AgentInfo = () => {
  const { itinerary } = useContext(CheckoutContext);
  return (
    <div>
      <Container className="info-tab d-flex justify-between">
        <div className="flex flex-wrap gap-[40px] items-center mb-[78px]">
          <Counter label={"number of days"} number={7} />
          <Counter label={"people"} number={3} />
          <div>
            <label
              htmlFor=""
              className="text-uppercase label pl-3 text-[#1A1A33] text-[12px] font-[500]"
            >
              place
            </label>
            <select className="bg-transparent text-[#00F]">
              <option>Spain</option>
              <option>Franch</option>
            </select>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-uppercase label pl-3 text-[#1A1A33] text-[12px] font-[500]"
            >
              place
            </label>
            <select className="bg-transparent text-[#00F]">
              <option>Spain</option>
              <option>Franch</option>
            </select>
          </div>
          <Calender />
          <div>
            <label
              htmlFor=""
              className="text-uppercase text-[#1A1A33] text-[12px] font-[500]"
            >
              FOOTPRINT
            </label>
            <div className="d-flex align-center">
              <p>{itinerary?.itinerary?.project?.priority}</p>
              <p className="text-[18px] text-[#1A1A33] font-[400]">High</p>
              <img className="small-img" src={info} alt="info" />
            </div>
          </div>
          <div className="text-[#5482F9] text-[16px] font-[500] gap-[24px] flex">
            <Link>I want something lower</Link>
            <Link>Offsetting options</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AgentInfo;
