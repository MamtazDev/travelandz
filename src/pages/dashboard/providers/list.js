import { Helmet } from "react-helmet-async";
// sections
import { ProviderListView } from "src/sections/providers/view";

// ----------------------------------------------------------------------

export default function ProviderListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Provider List</title>
      </Helmet>

      <ProviderListView />
    </>
  );
}
