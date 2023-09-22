import { Helmet } from "react-helmet-async";
// sections
import { ProviderProfileView } from "src/sections/providers/view";

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Provider Profile</title>
      </Helmet>

      <ProviderProfileView />
    </>
  );
}
