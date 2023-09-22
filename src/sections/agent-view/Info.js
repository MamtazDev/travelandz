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
        <Grid xs={12} md={4} lg={4} container alignItems={"start"}>
          <Grid display={"flex"} gap={3} justifyContent={"space-between"}>
            <Counter label={"number of days"} number={7} />
            <Counter label={"people"} number={3} />

            <div>
              <label htmlFor="" className="text-uppercase label pl-3">
                place
              </label>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} md={7} lg={7} justifyContent={"space-between"} container>
          <Calender />
          <div>
            <label htmlFor="" className="text-uppercase">
              FOOTPRINT
            </label>
            <div className="d-flex align-center">
              <p>{itinerary?.itinerary?.project?.priority}</p>
              {/* <p>High</p> */}
              <img className="small-img" src={info} alt="info" />
            </div>
          </div>
          <Grid display={"flex"} alignSelf={"center"} justifySelf={"end"}>
            <Link>I want something lower</Link>
            <Link>Offsetting options</Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AgentInfo;
