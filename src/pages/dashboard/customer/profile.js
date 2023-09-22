import { Helmet } from "react-helmet-async";
// sections
import { CustomerProfileView } from "src/sections/customer/view";

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Customer Profile</title>
      </Helmet>

      <CustomerProfileView />
    </>
  );
}
