import { Helmet } from "react-helmet-async";
import AgentViewBook from "src/sections/agent-view-book";
import "../sections/agent-view/css/style.css";
// ----------------------------------------------------------------------

export default function AgentView() {
  return (
    <>
      <Helmet>
        <title> Agent View Book</title>
      </Helmet>
      <AgentViewBook />
    </>
  );
}
