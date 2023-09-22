import { Helmet } from "react-helmet-async";
import AgentViewPage from "src/sections/agent-view/view";
import "../sections/agent-view/css/style.css";
// ----------------------------------------------------------------------

export default function AgentView() {
  return (
    <>
      <Helmet>
        <title> Agent View</title>
      </Helmet>
      <AgentViewPage />
    </>
  );
}
