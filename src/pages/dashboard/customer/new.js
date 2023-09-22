import { Helmet } from "react-helmet-async";
// sections
import { CustomerCreateView } from "src/sections/customer/view";

// ----------------------------------------------------------------------

export default function UserCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new customer</title>
      </Helmet>

      <CustomerCreateView />
    </>
  );
}
