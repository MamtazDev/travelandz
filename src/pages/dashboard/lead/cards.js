import { Helmet } from "react-helmet-async";
// sections
import { LeadCardsView } from "src/sections/lead/view";

// ----------------------------------------------------------------------

export default function LeadCardsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Providers Cards</title>
      </Helmet>

      <LeadCardsView />
    </>
  );
}
