import React from "react";
import logo from "../../assets/agent/logo.png";
import { Container } from "@mui/material";

const AgentHeader = () => {
  return (
    <header className="agent-header">
      <Container>
        <img src={logo} alt="logo" />
      </Container>
    </header>
  );
};

export default AgentHeader;
