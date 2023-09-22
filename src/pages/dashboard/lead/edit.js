import { Helmet } from "react-helmet-async";
// routes
import { useParams } from "src/routes/hooks";
// sections
import { LeadEditView } from "src/sections/lead/view";

// ----------------------------------------------------------------------

export default function LeadEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Lead Edit</title>
      </Helmet>

      <LeadEditView id={`${id}`} />
    </>
  );
}
