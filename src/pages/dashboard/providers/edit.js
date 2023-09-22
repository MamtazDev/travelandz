import { Helmet } from "react-helmet-async";
// routes
import { useParams } from "src/routes/hooks";
// sections
import { ProviderEditView } from "src/sections/providers/view";

// ----------------------------------------------------------------------

export default function ProviderEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Provider Edit</title>
      </Helmet>

      <ProviderEditView id={`${id}`} />
    </>
  );
}
