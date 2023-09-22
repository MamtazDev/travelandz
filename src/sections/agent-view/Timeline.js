import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, InputAdornment, TextField } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import TimelineMorning from "./timelineMorning";
import LaunchTime from "./launchTime";
import EveningTime from "./eveningTime";
import DinnerTime from "./dinnerTime";
import NightTime from "./nightTime";

const TimelineData = () => {
  return (
    <Grid container display={"flex"} justifyContent={"space-between"}>
      <Grid xs={12} md={5} lg={5}>
        <p>
          Accompanied by your private guide, discover the masterpieces of
          Catalonia's famed architect, Antoni Gaudí, starting with the Casa
          Mila, also known as La Pedrera.{" "}
        </p>
        <p>
          Next, visit the visually arresting Sagrada Familia Basilica. Started
          in 1882 and still not complete, it combines Gothic influences with Art
          Nouveau.
        </p>
        <p>
          Finally, stop at Parc Guell, a beautiful municipal garden with a
          gatehouse where Gaudí lived during his later years, to view
          furnishings he designed as well as personal memorabilia. This evening,
          enjoy a local Chef’s Showcooking and savour the authentic flavors of
          Spain.
        </p>
      </Grid>
      <Grid xs={12} md={6} lg={6}>
        <div className="d-flex align-start gap-4 relative mb-5">
          <div className="time">
            <p className="text-uppercase my-0 before-line" >breakfast</p>
          </div>
          <div className="w-100">
            <TextField
              fullWidth
              id="input-with-icon-textfield"
              className="input-timeline mb-2"
              label="Outlined"
              defaultValue={'Included in the hotel'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CheckCircleIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <Button className="flex-start btn addbtn" fullWidth variant="outlined"> <AddIcon /> Add recommendation</Button>
          </div>
        </div>
        <TimelineMorning/>
        <LaunchTime/>
        <EveningTime/>
        <DinnerTime/>
        <NightTime/>
      </Grid>
    </Grid>
  );
};

export default TimelineData;
