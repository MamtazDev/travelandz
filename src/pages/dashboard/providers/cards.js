import { Helmet } from "react-helmet-async";
// sections
import { UserCardsView } from "src/sections/user/view";

// ----------------------------------------------------------------------

export default function UserCardsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Providers Cards</title>
      </Helmet>

      <UserCardsView />
    </>
  );
}
