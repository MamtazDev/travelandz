import { Helmet } from "react-helmet-async";
// sections
import { LeadListView } from "src/sections/lead/view";

// ----------------------------------------------------------------------

export default function LeadListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Lead List</title>
      </Helmet>

      <LeadListView />
    </>
  );
}
