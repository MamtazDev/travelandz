import { Helmet } from "react-helmet-async";
// sections
import { CustomerCardsView } from "src/sections/customer/view";

// ----------------------------------------------------------------------

export default function CustomerCardsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Customer Cards</title>
      </Helmet>

      <CustomerCardsView />
    </>
  );
}
