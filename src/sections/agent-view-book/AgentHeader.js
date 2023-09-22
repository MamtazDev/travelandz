import { Container } from "@mui/material";
import logo from "../../assets/agent/logo.png";

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
