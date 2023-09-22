import { Helmet } from "react-helmet-async";
// sections
import { ProviderCreateView } from "src/sections/providers/view";

// ----------------------------------------------------------------------

export default function ProviderCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a Provider user</title>
      </Helmet>

      <ProviderCreateView />
    </>
  );
}
