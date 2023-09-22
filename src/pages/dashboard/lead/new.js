import { Helmet } from "react-helmet-async";
// sections
import { LeadCreateView } from "src/sections/lead/view";

// ----------------------------------------------------------------------

export default function LeadCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a Lead user</title>
      </Helmet>

      <LeadCreateView />
    </>
  );
}
