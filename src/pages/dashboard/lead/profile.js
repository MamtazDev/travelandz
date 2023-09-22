import { Helmet } from "react-helmet-async";
// sections
import { LeadProfileView } from "src/sections/lead/view";

// ----------------------------------------------------------------------

export default function LeadProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Lead Profile</title>
      </Helmet>

      <LeadProfileView />
    </>
  );
}
