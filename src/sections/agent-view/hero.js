import { m } from "framer-motion";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useContext, useState } from "react";
import heroImage from "../../assets/agent/hero.png";
import reset from "../../assets/agent/reset.png";
import { CheckoutContext } from "../checkout/context/checkout-context";
const Hero = () => {
  const [email, setEmail] = useState("abcd@gmail.com");
  const { itinerary } = useContext(CheckoutContext);
  const clearInput = () => {
    setEmail("");
  };
  console.log(itinerary, "ff");
  return (
    <div className="agent-hero">
      <Container
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Grid container alignItems="flex-start" justifyContent="space-between">
          <Grid xs={12} md={10} lg={10} alignItems="start" display={"flex"}>
            <img src={heroImage} alt="" className="mr-3" />
            <m.div>
              <p className="badge">PRE-BOOKED</p>
              <h2 className="hero-heading">
                {itinerary?.itinerary?.project?.title}
                {/*Taylor made inspiring Spain*/}
              </h2>
            </m.div>
          </Grid>

          <Grid
            justifyContent={"start"}
            display={"block"}
            xs={12}
            md={2}
            lg={2}
            alignItems="center"
          >
            <Grid
              onClick={clearInput}
              display={"flex"}
              className="pointer"
              alignItems={"center"}
              justifyContent={"end"}
            >
              <img src={reset} alt="reset" className="small-img" />
              <p className="my-0 ms-2 reset">Reset</p>
            </Grid>
            <div>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="standard-basic"
                label="MAIL"
                variant="standard"
                defaultValue={email}
              />
            </div>
            <div>
              <h3 className="hero-subhead mb-0">2132 €</h3>
              <p className="my-0 text-second">1062€/ person</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
